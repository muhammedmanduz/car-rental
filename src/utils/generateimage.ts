import { CarType } from "./types";
import { colors } from "./constants";


const generateImage=(car:CarType,angle?:string):string =>{
    const url= new URL("https://cdn.imagin.studio/getimage")

    //arama parametlerini kendisi ekliyor

    url.searchParams.append("customer", "hrjavascript-mastery");
    url.searchParams.append("make", car.make);
    url.searchParams.append("modelFamily", car.model.split(" ")[0]);
    url.searchParams.append("zoomType", "fullscreen");

    if (angle) {
        url.searchParams.append("angle",angle);
    }
//diziden rastgele bir renk kodu seç
const i=Math.round(Math.random() *colors.length);
//renk parametresini url e ekle
    url.searchParams.append("painId",colors[i]);

    return url.href;;
};

export default generateImage;