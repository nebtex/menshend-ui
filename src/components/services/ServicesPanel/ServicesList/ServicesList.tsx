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
    itemsPerRow: 2
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
    
    rows.forEach((row:any, rowIndex:number) => {
      rowComponents.push(
        <Row style={{height:'300px'}} key={rowIndex}>
          {row.map( (service:IService, rowItemIndex:number) =>{
            return (
              <Col xs={12 / this.state.itemsPerRow} className={styles.col} key={rowItemIndex}>
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
        elementHeight={300}
        timeScrollStateLastsForAfterUserScrolls={0}
        useWindowAsScrollContainer>
          {rowComponents}
      </Infinite>
    );
  }
}