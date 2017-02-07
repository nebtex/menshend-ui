import * as React from 'react';
import Infinite = require('react-infinite');
import { Col, Row } from 'reactstrap';
import { IService, IUser } from '../../../../models/interface';
import ServiceCard from '../../ServiceCard/ServiceCard';
let styles = require('./ServicesList.scss');

interface IServicesListState {
  itemsPerRow:number;
}

interface IServicesListProps {
  services: IService[];
  user: IUser;
}

export default class ServicesList extends React.Component<IServicesListProps,{}>{
  state = {
    itemsPerRow: 3
  }

  getRows = () => {
    let user = this.props.user
    let services = this.props.services;
    let rowComponents:any[] = [];
    let rows = [], tempArray:any;

    for(var i = 0; i < services.length; i += this.state.itemsPerRow){
        tempArray = services.slice(i, i + this.state.itemsPerRow);
        rows.push(tempArray);
    }
    
    rows.forEach((row:any) => {
      rowComponents.push(
        <Row style={{height:'200px'}}>
          {row.map( (service:IService) =>{
            return (
              <Col xs={12 / this.state.itemsPerRow}>
                <ServiceCard service={service} user={user}/>
              </Col>
            );
          })}
        </Row>
      );
    });

    return rowComponents;
  }

  render(){
    let rowComponents = this.getRows();
    return (
      <Infinite 
        containerHeight={400} 
        elementHeight={200}
        useWindowAsScrollContainer>
          {rowComponents}
      </Infinite>
    );
  }
}