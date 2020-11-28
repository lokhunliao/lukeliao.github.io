import React from 'react';
import { Card, CardImg, CardImgOverlay,  CardTitle } from 'reactstrap';
// CardText, CardBody, is not being used 

function RenderDirectoryItem ({campsite}){
                                // {campsite, onClick}
    return(
        // <Card onClick={() => onClick(campsite.id)}>  
        <Card>
            <CardImg width="100%" src={campsite.image} alt={campsite.name} />
            <CardImgOverlay>
                <CardTitle>{campsite.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}

function Directory(props) {


    // renderSelectedCampsite(campsite) {
    //     if (campsite) {
    //         return (
    //             <Card>
    //                 <CardImg top src={campsite.image} alt={campsite.name} />
    //                 <CardBody>
    //                     <CardTitle>{campsite.name}</CardTitle>
    //                     <CardText>{campsite.description}</CardText>
    //                 </CardBody>
    //             </Card>
    //         );
    //     }
    //     return <div />;
    // }

        const directory = props.campsites.map(campsite => {
            return (
                <div key={campsite.id} className="col-md-5 m-1">
                    <RenderDirectoryItem campsite={campsite} />
                    {/* <RenderDirectoryItem campsite={campsite} onClick={props.onClick} /> */}
                </div>
            );
        });

        return (
                <div className="container">
                    <div className="row">
                        {directory}
                    </div>
                </div>
                
            //     {/* <ExampleParentComponent /> */}
            //     {/* <div className="row">
            //         <div className="col-md-5 m-1">
            //             {this.renderSelectedCampsite(this.state.selectedCampsite)}
            //         </div>
            //     </div> */}
            // {/* </div> */}
        );
    }


// class ExampleParentComponent extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             number : 333
//         }
//     }

//     render(){
//         return <ExampleChildComponent number = {this.state.number} greeting ="hello world"/>; 
//     }
// }

// class ExampleChildComponent extends Component {
//     render(){
//     return <div>{this.props.number} {this.props.greeting}</div>
//     };
// }

export default Directory;