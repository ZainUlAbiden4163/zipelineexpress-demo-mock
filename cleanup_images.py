import os
import re
import glob

# 1. Map of original path to new meaningful name
# Paths should be relative to the public/ folder or src/assets/images/
# But wait, we can just replace the file contents and then mv the files.

renames = {
    # PrivateCharter.jsx experiences
    "public/experiences/IMG_0519.jpeg": "public/experiences/swimming-with-pigs.jpeg",
    "public/experiences/JoelWestsideBone-1920_edited_edited.jpg": "public/experiences/world-class-bonefishing.jpg",
    "public/experiences/jakob-owens-VkpFJzV455I-unsplash.jpg": "public/experiences/luxury-resorts-beaches.jpg",
    "public/experiences/IMG-0014.jpg": "public/experiences/crystal-clear-waters.jpg",
    "public/experiences/claude-piche-205364-unsplash.jpg": "public/experiences/pink-sand-beaches.jpg",
    "public/experiences/IMG_0548.jpeg": "public/experiences/island-adventures.jpeg",
    "public/experiences/jakob-owens-300988-unsplash.jpg": "public/experiences/tropical-escapes.jpg",
    "public/experiences/46395bd3-00ab-4b2e-9a4b-652b9acf2856.jpeg": "public/experiences/secluded-coves.jpeg",
    "public/experiences/IMG_4723.jpeg": "public/experiences/marine-life.jpeg",
    "public/experiences/d1385fd5-ab64-42c3-8c5f-7f7cb3120a20.jpeg": "public/experiences/pristine-coastlines.jpeg",
    "public/experiences/oliver-sjostrom-iSrBg45UCaM-unsplash_edited.jpg": "public/experiences/private-island-retreats.jpg",
    
    # Landing Page Banners
    "public/Landing Page Banner/improved_person_rock.jpg": "public/Landing Page Banner/travel-info-banner.jpg",
    "public/Landing Page Banner/improved_28660791.jpg": "public/Landing Page Banner/scheduled-flights-banner.jpg",
    "public/Landing Page Banner/improved_cessna.jpg": "public/Landing Page Banner/about-crew.jpg",
    "public/Landing Page Banner/charter1.jpg": "public/Landing Page Banner/zipline-cessna-tarmac.jpg",
    "public/Landing Page Banner/28660791_1595264923903721_3264508752249749504_o.jpg": "public/Landing Page Banner/bahamas-islands-aerial-2.jpg",
    "public/Landing Page Banner/improved_ships.jpg": "public/Landing Page Banner/customer-service-banner.jpg",
    "public/Landing Page Banner/staniel-cay-bahamas-flights-tours copy.jpg": "public/Landing Page Banner/zipline-aircraft-flying.jpg",
}

# Apply renames to source code files
files_to_check = glob.glob('src/**/*.jsx', recursive=True)

for filepath in files_to_check:
    with open(filepath, 'r') as f:
        content = f.read()
    
    modified = False
    for old_path, new_path in renames.items():
        # Remove 'public' prefix for usage in React
        old_ref = old_path.replace('public', '')
        new_ref = new_path.replace('public', '')
        
        # Some old paths might be URL encoded in the code
        old_ref_encoded = old_ref.replace(' ', '%20')
        new_ref_encoded = new_ref.replace(' ', '%20')
        
        if old_ref in content:
            content = content.replace(old_ref, new_ref)
            modified = True
        if old_ref_encoded in content:
            content = content.replace(old_ref_encoded, new_ref_encoded)
            modified = True
            
    if modified:
        with open(filepath, 'w') as f:
            f.write(content)
        print(f"Updated references in {filepath}")

# Rename actual files
for old_path, new_path in renames.items():
    if os.path.exists(old_path):
        os.rename(old_path, new_path)
        print(f"Renamed {old_path} to {new_path}")

# Now, find all images again, check if they are used, and move them to extra if not.
all_images = []
for ext in ('*.jpg', '*.jpeg', '*.png', '*.svg', '*.webp'):
    all_images.extend(glob.glob(f'public/**/{ext}', recursive=True))
    all_images.extend(glob.glob(f'src/assets/images/**/{ext}', recursive=True))

os.makedirs('public/extra', exist_ok=True)
os.makedirs('src/assets/images/extra', exist_ok=True)

# Read all source files into memory
all_code = ""
for filepath in files_to_check:
    with open(filepath, 'r') as f:
        all_code += f.read()

# For CSS files
css_files = glob.glob('src/**/*.css', recursive=True)
for filepath in css_files:
    with open(filepath, 'r') as f:
        all_code += f.read()

for img_path in all_images:
    if 'public/extra' in img_path or 'src/assets/images/extra' in img_path:
        continue
    
    # Check if used
    # E.g. public/experiences/swimming.jpg -> /experiences/swimming.jpg
    # E.g. src/assets/images/hero.jpg -> hero.jpg
    
    is_used = False
    
    if img_path.startswith('public/'):
        ref = img_path.replace('public/', '/', 1)
        ref_encoded = ref.replace(' ', '%20')
        if ref in all_code or ref_encoded in all_code:
            is_used = True
    elif img_path.startswith('src/assets/images/'):
        ref = os.path.basename(img_path)
        if ref in all_code:
            is_used = True
            
    if not is_used:
        # Special ignore for favicon, vite.svg, logos which might be used in index.html
        if 'favicon.svg' in img_path or 'vite.svg' in img_path or 'zipline-express' in img_path or 'icons.svg' in img_path:
            continue
            
        print(f"Moving unused image: {img_path}")
        basename = os.path.basename(img_path)
        if img_path.startswith('public/'):
            os.rename(img_path, f'public/extra/{basename}')
        else:
            os.rename(img_path, f'src/assets/images/extra/{basename}')

print("Cleanup script completed!")
