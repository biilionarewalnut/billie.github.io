const right_box=document.querySelector("body");
rand_num=Math.ceil(Math.random()*4);
console.log(`image/${rand_num}.jpeg`);
img_path=`image/${rand_num}.jpeg`;

right_box.style.backgroundImage = `url(image/${rand_num}.jpeg)`;

right_box.style.backgroundSize="cover";

    

