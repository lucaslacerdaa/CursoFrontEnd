import { render} from "@testing-library/react";
import Welcome from "./Welcome.css"

class Welcome extends Component{
    constructor(props){
        super(props);
        this.state = {sectionData:props.sectionData};
        this.filterList = this.filterList.bind(this);
    }

    filterList(value){

        let data = null;

        if(value){
            data = this.state.sectionData.filter(
                (user)=>{
                    return user.name.includes(value);
                }
            )
        }
        else{
            data = this.props.sectionData;
        }
    }
}

render(){
    const{title, footerDesc, sectionData} = this.props;

    return(
        <div className="Welcome">
            <Header title={title}></Header>
            <Section listData={sectionData}></Section>
            <Footer description={footerDesc}></Footer>

        </div>
    )
}