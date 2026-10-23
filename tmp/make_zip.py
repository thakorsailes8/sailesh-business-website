import os
import shutil
import zipfile

pkg_dir = '/tmp/sailesh-designs-portfolio'
if os.path.exists(pkg_dir):
    shutil.rmtree(pkg_dir)
os.makedirs(pkg_dir, exist_ok=True)

# 1. HTML & Bootstrap Website
html_dir = os.path.join(pkg_dir, '1-HTML-and-Bootstrap-Website')
os.makedirs(html_dir, exist_ok=True)

html_map = {
    'public/assets/aistudio/Image_2_190cfe47.html': 'index.html',
    'public/assets/aistudio/Image_4_13f50b8a.html': 'about.html',
    'public/assets/aistudio/Image_6_c85870f2.html': 'services.html',
    'public/assets/aistudio/Image_8_145c9e3f.html': 'gallery.html',
    'public/assets/aistudio/Image_10_d7bbefa8.html': 'contact.html',
}

for src, dst in html_map.items():
    if os.path.exists(src):
        shutil.copyfile(src, os.path.join(html_dir, dst))

with open(os.path.join(html_dir, 'README.txt'), 'w', encoding='utf-8') as f:
    f.write('''========================================================================
SAILESH DESIGNS STUDIO - HTML5 & BOOTSTRAP 5 STANDALONE WEBSITE
========================================================================

HOW TO RUN:
1. Koi bhi installation ya server ki jarurat nahi hai!
2. Bas kisi bhi file par double click kijiye:
   - index.html    -> Home Page
   - about.html    -> About Me Page
   - services.html -> Services Page
   - gallery.html  -> Portfolio Gallery Page
   - contact.html  -> Contact Page
3. File aapke Chrome, Edge ya Safari browser me turant open ho jayegi.

HOW TO ADD YOUR IMAGES:
1. Kisi bhi text editor (VS Code, Notepad, etc.) me HTML file open karein.
2. Har <img> tag ke upar comment likha hai jisme bataya gaya hai ki konsi photo lagani hai:
   <!-- LOGO IMAGE: Replace src with your image -->
   <img src="assets/your-image.jpg" ... />
3. Bas src="" me apni photo ka path ya file name daal dijiye!
''')

# 2. React + TypeScript + Tailwind Website
react_dir = os.path.join(pkg_dir, '2-React-TypeScript-Tailwind-Website')
os.makedirs(react_dir, exist_ok=True)

shutil.copytree('src', os.path.join(react_dir, 'src'))
shutil.copyfile('index.html', os.path.join(react_dir, 'index.html'))
shutil.copyfile('package.json', os.path.join(react_dir, 'package.json'))
shutil.copyfile('tsconfig.json', os.path.join(react_dir, 'tsconfig.json'))
shutil.copyfile('vite.config.ts', os.path.join(react_dir, 'vite.config.ts'))
shutil.copyfile('metadata.json', os.path.join(react_dir, 'metadata.json'))
shutil.copyfile('.env.example', os.path.join(react_dir, '.env.example'))
shutil.copyfile('.gitignore', os.path.join(react_dir, '.gitignore'))

with open(os.path.join(react_dir, 'README.md'), 'w', encoding='utf-8') as f:
    f.write('''# Sailesh Designs Studio - React + Vite + Tailwind

## How to Run:
```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build for production
npm run build
```

## How to Add Your Images:
- Har component (`Header.tsx`, `HomePage.tsx`, `AboutPage.tsx`, `ServicesPage.tsx`, `GalleryPage.tsx`, `ContactPage.tsx`) me `<img>` tags ke upar clear comments likhe hue hain.
- Ya fir `src/data/portfolioData.ts` me jakar `image: '/assets/your-image.jpg'` daal dijiye!
''')

# 3. Root Guide Files
with open(os.path.join(pkg_dir, 'HOW-TO-ADD-YOUR-IMAGES.txt'), 'w', encoding='utf-8') as f:
    f.write('''========================================================================
SAILESH DESIGNS STUDIO - IMAGE ADDING GUIDE
========================================================================

Aapki website me 2 options diye gaye hain:

1. FOLDER "1-HTML-and-Bootstrap-Website":
   - Pure HTML5 + Bootstrap 5 files hain.
   - Kisi bhi browser me direct chalegi (No installation needed).
   - Har image tag ke upar comment likha hai jisse aap easily photo change kar sakein.

2. FOLDER "2-React-TypeScript-Tailwind-Website":
   - Modern React 19 + TypeScript + Tailwind CSS full project hai.
   - npm install aur npm run dev se start hoti hai.
   - Components me <img> tags with comments aur fallback designs included hain.

Images Kaise Add Karein:
- Apni image ko folder me save karein (e.g. "my-photo.jpg").
- HTML ya TSX file me <img src="my-photo.jpg" ...> me apna file name likh dijiye.
- Empty src hone par bhi design kharab nahi hoga!
''')

with open(os.path.join(pkg_dir, 'README.txt'), 'w', encoding='utf-8') as f:
    f.write('''========================================================================
SAILESH DESIGNS STUDIO - COMPLETE CODE PACKAGE
========================================================================
Created for: Sailesh (thakorsailes8@gmail.com)
Date: October 2026

Includes:
1. 1-HTML-and-Bootstrap-Website (Pure HTML/CSS - Ready to open in browser)
2. 2-React-TypeScript-Tailwind-Website (Full Source Code)
3. HOW-TO-ADD-YOUR-IMAGES.txt (Step-by-step instructions)
''')

# Create ZIP
os.makedirs('public', exist_ok=True)
zip_path = 'public/sailesh-designs-portfolio.zip'
if os.path.exists(zip_path):
    os.remove(zip_path)

with zipfile.ZipFile(zip_path, 'w', zipfile.ZIP_DEFLATED) as zipf:
    for root, dirs, files in os.walk(pkg_dir):
        for file in files:
            full_path = os.path.join(root, file)
            arcname = os.path.relpath(full_path, pkg_dir)
            zipf.write(full_path, arcname)

size_kb = os.path.getsize(zip_path) / 1024
print(f'Successfully created {zip_path} ({size_kb:.2f} KB)')
