import json
import os

# Define the file path
json_file_path = '/Users/filipvabrousek/sls3-2026/upload/products.json'

# The exact mapping of product IDs to their new list of images based on user input
image_updates = {
    "all-rounder-polstrovane": [
        "all-rounder-barevn-podkolenky-001.jpg", "all-rounder-barevn-podkolenky-002.jpg",
        "all-rounder-barevn-podkolenky-003.jpg", "all-rounder-barevn-podkolenky-004.jpg",
        "all-rounder-barevn-podkolenky-005.jpg", "all-rounder-barevn-podkolenky-006.jpg",
        "all-rounder-barevn-podkolenky-007.jpg", "all-rounder-barevn-podkolenky-008.jpg",
        "all-rounder-barevn-podkolenky-009.jpg", "all-rounder-barevn-podkolenky-010.jpg",
        "all-rounder-barevn-podkolenky-011.jpg", "all-rounder-barevn-podkolenky-012.jpg",
        "all-rounder-barevn-podkolenky-013.jpg"
    ],
    "allrounded-lytk-navl": [
        "allrounder-l-tkov-n-vleky-001.jpg", "allrounder-l-tkov-n-vleky-002.jpg",
        "allrounder-l-tkov-n-vleky-003.jpg", "allrounder-l-tkov-n-vleky-004.jpg",
        "allrounder-l-tkov-n-vleky-005.jpg", "allrounder-l-tkov-n-vleky-006.png",
        "allrounder-l-tkov-n-vleky-007.png"
    ],
    "fx-aero-triatlonova-kombineza": [
        "fx-aero-triatlonov-kombin-za-001.jpg", "fx-aero-triatlonov-kombin-za-002.jpg",
        "fx-aero-triatlonov-kombin-za-003.jpg", "fx-aero-triatlonov-kombin-za-004.jpg",
        "fx-aero-triatlonov-kombin-za-005.jpg", "fx-aero-triatlonov-kombin-za-006.jpg",
        "fx-aero-triatlonov-kombin-za-007.jpg", "fx-aero-triatlonov-kombin-za-008.jpg",
        "fx-aero-triatlonov-kombin-za-009.jpg", "fx-aero-triatlonov-kombin-za-010.jpg",
        "fx-aero-triatlonov-kombin-za-011.jpg", "fx-aero-triatlonov-kombin-za-012.jpg",
        "fx-aero-triatlonov-kombin-za-013.jpg", "fx-aero-triatlonov-kombin-za-014.jpg",
        "fx-aero-triatlonov-kombin-za-015.jpg"
    ],
    "fx-damska-triatlonova-kombineza": [
        "fx-d-msk-triatlonov-kombin-za-001.jpg", "fx-d-msk-triatlonov-kombin-za-002.jpg",
        "fx-d-msk-triatlonov-kombin-za-003.jpg", "fx-d-msk-triatlonov-kombin-za-004.jpg",
        "fx-d-msk-triatlonov-kombin-za-005.jpg", "fx-d-msk-triatlonov-kombin-za-006.jpg",
        "fx-d-msk-triatlonov-kombin-za-007.png", "fx-d-msk-triatlonov-kombin-za-008.jpg",
        "fx-d-msk-triatlonov-kombin-za-009.jpg", "fx-d-msk-triatlonov-kombin-za-010.jpg"
    ],
    "fx-dresy": [
        "fx-dresy-001.jpg", "fx-dresy-002.jpg", "fx-dresy-003.jpg",
        "fx-dresy-004.jpg", "fx-dresy-005.jpg", "fx-dresy-006.jpg"
    ],
    "fx-kombinezy": [
        "fx-kombin-zy-001.jpg", "fx-kombin-zy-002.jpg", "fx-kombin-zy-003.jpg",
        "fx-kombin-zy-004.jpg", "fx-kombin-zy-005.jpg", "fx-kombin-zy-006.jpg",
        "fx-kombin-zy-007.png"
    ],
    "fx-sortky": [
        "fx-ortky-001.jpg", "fx-ortky-002.jpg", "fx-ortky-003.jpg",
        "fx-ortky-004.jpg", "fx-ortky-005.jpg", "fx-ortky-006.jpg",
        "fx-ortky-007.jpg"
    ],
    "fxc": [
        "fxc-001.jpg", "fxc-002.jpg", "fxc-003.jpg",
        "fxc-004.jpg", "fxc-005.jpg"
    ],
    "FXC-lytkove-navleky": [
        "fxc-l-tkov-n-vleky-001.jpg", "fxc-l-tkov-n-vleky-002.jpg",
        "fxc-l-tkov-n-vleky-003.jpg", "fxc-l-tkov-n-vleky-004.jpg",
        "fxc-l-tkov-n-vleky-005.jpg", "fxc-l-tkov-n-vleky-006.jpg",
        "fxc-l-tkov-n-vleky-007.jpg", "fxc-l-tkov-n-vleky-008.jpg",
        "fxc-l-tkov-n-vleky-009.jpg", "fxc-l-tkov-n-vleky-010.jpg",
        "fxc-l-tkov-n-vleky-011.jpg", "fxc-l-tkov-n-vleky-012.jpg"
    ],
    "jak-na-triatlon": [
        "jak-na-triatlon-001.jpg", "jak-na-triatlon-002.jpg",
        "jak-na-triatlon-003.jpg"
    ],
    "hippzip-opasek": [
        "sportovn-opasek-hippzip-001.jpg", "sportovn-opasek-hippzip-002.jpg",
        "sportovn-opasek-hippzip-003.jpg", "sportovn-opasek-hippzip-004.jpg",
        "sportovn-opasek-hippzip-005.jpg"
    ]
}

def update_product_images(json_path, updates):
    try:
        with open(json_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
        
        updated_count = 0
        
        for category in data.get('categories', []):
            for product in category.get('products', []):
                pid = product.get('id')
                if pid in updates:
                    # Prefix with 'p/' as per existing convention
                    new_images = [f"p/{img}" for img in updates[pid]]
                    product['images'] = new_images
                    print(f"Updated product: {pid} with {len(new_images)} images.")
                    updated_count += 1
        
        with open(json_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
            
        print(f"Successfully updated {updated_count} products.")
        
    except Exception as e:
        print(f"Error updating JSON: {e}")

if __name__ == "__main__":
    update_product_images(json_file_path, image_updates)
