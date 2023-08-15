import Slider from "../../component/Slider/Slide";
import Servces from "../../component/services/Services";
import Book_slider from "../../component/book-slider/Book-slider";
import {books} from "../../data/books"
import HeadingTitle from "../../component/heading-title/HeadingTitle";
function HomePage(){
    return(
        <div className="home">
            <Slider/>
            <Servces/>
            <HeadingTitle title="most gifted"/>
            <Book_slider data={books}/>
            <HeadingTitle title="best seller"/>
            <Book_slider data={books}/>
            <HeadingTitle title="most widhed for"/>
            <Book_slider data={books}/>
        </div>
    )
}
export default HomePage