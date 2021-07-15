const arguments = process.argv.slice(2);

function cirlceArea(r){
    area = Math.PI*r*r;
    fixedArea = area.toFixed(2);

    console.log(`Yarıçapı ${r} olan dairenin alanı: ${fixedArea}`);
}

cirlceArea(arguments[0]*1);
