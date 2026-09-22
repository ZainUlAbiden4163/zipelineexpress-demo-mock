import pytesseract
from PIL import Image
import glob

for f in glob.glob('public/planes/king-air-*.jpeg'):
    try:
        text = pytesseract.image_to_string(Image.open(f))
        if 'C6-ZEL' in text or 'C6-LHB' in text or 'ZEL' in text or 'LHB' in text:
            print(f"Found in {f}")
    except Exception as e:
        pass
