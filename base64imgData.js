var base64ImageData = function(src, callback) {
    var img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = src;
    img.onload = function(){
        var canvas = document.createElement('canvas');
        var context = canvas.getContext('2d');
        canvas.width = img.width;
        canvas.height = img.height;
        context.drawImage(img, 0, 0);
        callback(null, canvas.toDataURL('image/jpeg'));
    };
    img.onerror = function(error){
        console.log(src);
        callback('error', null);
    };
}