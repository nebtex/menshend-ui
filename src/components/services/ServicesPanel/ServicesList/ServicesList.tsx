import * as React from 'react';
import Infinite = require('react-infinite');
import { IService, IUser } from '../../../../models/interface';
import ServiceCard from '../../ServiceCard/ServiceCard';
let styles = require('./ServicesList.scss');

interface IServicesListProps {
  services: IService[];
  user: IUser;
}

export default class ServicesList extends React.Component<IServicesListProps,{}>{
  state = {
    isInfiniteLoading: false
  }

  render(){
    let user = this.props.user;
    return (
      <Infinite 
        containerHeight={400} 
        elementHeight={200}>
          {this.props.services.map((service, index)=>{
            return (
              <div className={styles.servicesListItem} key={index} style={{height:200}}>
                <ServiceCard service={service} user={user}/>
              </div>
            );
          })}
      </Infinite>
    );
  }
}