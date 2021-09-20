import React, {Component} from 'react';

class Head extends Component {
    constructor(props){
      super(props);
      this.state = {valor: ''};
    }
    render(){
      return(
        <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
            
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" />
            <title>Maqueta proyecto React</title> 
        </head>
    );
    }
}

export default Head;
