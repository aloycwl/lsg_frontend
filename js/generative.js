var Background = [
    'Green',
    'Pink',
    'Brown',
    'Dark Gray',
    'Purple',
    'Gray',
    'Yellow',
    'Red',
    'Blue',
  ],
  Body = [
    'Blue',
    'Pink',
    'Light Gray',
    'Green',
    'Red',
    'Dark Gray',
    'Brown',
    'Purple',
    'Yellow',
  ],
  Headwear = ['Black Headphones', 'White Headphones', 'Beret', 'Tophat'],
  Brow = ['Furrowed', 'Raised', 'Normal'],
  Eyes = ['Sore', 'Normal', 'Crazy', 'Tired', 'Blur', 'Happy', 'Flame'],
  Beak = ['Open', 'Sad', 'Gold Teeth', 'Tounge Out', 'Wide'],
  mAccessories = ['Black Glasses', 'Gold Glasses', 'Monacle'],
  mClothes = [
    'Black Tattoo',
    'White Tattoo',
    'Red Shirt',
    'Purple Shirt',
    'Blue Shirt',
    'Green Shirt',
    'Purple Suit',
    'Red Suit',
    'Black Suit',
    'Blue Suit',
  ],
  fMask = ['Blue-Gold', 'Red-Purple', 'Red-Yellow', 'Gold'],
  fClothes = [
    'White Tattoo',
    'Black Tattoo',
    'Purple Flower Shirt',
    'Blue Flower Shirt',
    'Gray Flower Shirt',
    'Pink Flower Shirt',
    'Yellow Dress',
    'Purple Dress',
    'Blue Dress',
    'Red Dress',
  ],
  fAccessories = ['Earrings', 'Necklace'],
  fFlower = ['Red-Purple', 'Yellow-Orange', 'Purple-Blue'],
  Teacup = ['Singapore'],
  s = 340;
async function dd(s1, s2, s3, s4) {
  r = ran(s3.length);
  if (r + s2 <= s3.length) {
    txt += `{"trait_type":"${s1}","value":"${s3[r]}"},`;
    img = new Image();
    img.src = `https://aloycwl.github.io/twc_frontend/img/gen1.png`;
    img.crossOrigin = 'Anonymous';
    return new Promise((resolve) => {
      img.onload = function () {
        cd.drawImage(img, r * s, s4 * s, s, s, 0, 0, 350, 350);
        resolve();
      };
    });
  }
}
async function drawLCA() {
  $('#nfts').append(
    `<canvas id="can${cnt}" width="350" height="350" style="cursor: hand"></canvas>`
  );
  (c = document.getElementById(`can${cnt}`)),
    (cd = c.getContext('2d')),
    cd.clearRect(0, 0, 350, 350);
  sex = ran(2);
  $('#traits').html(`${sex > 0 ? 'Male' : 'Female'}<br><br>`);
  txt = '{"attributes":[';
  await dd('Background', 3, Background, 0);
  await dd('Body', 0, Body, 2);
  await dd('Headwear', 2, Headwear, 1);
  await dd('Brow', 0, Brow, 3);
  await dd('Eyes', 0, Eyes, 4);
  if (sex > 0) {
    await dd('Clothes', 2, mClothes, 5);
    await dd('Accessories', 1, mAccessories, 6);
  } else {
    await dd('Clothes', 2, fClothes, 7);
    await dd('Accessories', 1, fAccessories, 8);
    await dd('Flower', 2, fFlower, 9);
    await dd('Mask', 2, fMask, 10);
  }
  await dd('Beak', 0, Beak, 11);
  await dd('Teacup', 0, Teacup, 12);
  $('#traits').append(txt.substring(0, txt.length - 1) + ']}');
  cnt++;
}
