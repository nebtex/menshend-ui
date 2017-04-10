import * as React from 'react';
import * as classnames from 'classnames';
import Infinite = require('react-infinite');
import { Col, Row } from 'reactstrap';
import { IUser } from '../../../../models/interface';
import { ClientService } from '../../../../api/api';
import ServiceCard from '../../ServiceCard/ServiceCard';
let styles = require('./ServicesList.scss');

interface IServicesListState {
  itemsPerRow:number;
}

interface IServicesListProps {
  services: Array<ClientService>;
  loginStatus: any;
  loading: boolean;
  openEditModal: any;
}

export default class ServicesList extends React.Component<IServicesListProps,{}>{
  static defaultProps = {
    services: new Array()
  }

  getItemsPerRow = () => {
    let width = window.innerWidth;
    if (width >= 1100){
      return 3;
    } else if (width >= 800 && width < 1100){
      return 2;
    } else if (width < 800){
      return 1;
    }
  }

  windowOnResizeHandler = () => {
    this.setState({
      itemsPerRow: this.getItemsPerRow()
    });
  }

  state = {
    itemsPerRow: this.getItemsPerRow()
  }

  componentDidMount() {
    window.addEventListener('resize', this.windowOnResizeHandler)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.windowOnResizeHandler);
  }

  getRows = () => {
    const { loginStatus, services } = this.props;
    let rowComponents:any[] = [];
    let rows:any[] = [], tempArray:any;

    for(var i = 0; i < services.length; i += this.state.itemsPerRow){
        tempArray = services.slice(i, i + this.state.itemsPerRow);
        rows.push(tempArray);
    }
    
    rows.forEach((row:any, rowIndex:number) => {
      let lastRow = rowIndex === rows.length - 1,
          rowClassname =  lastRow ? styles.lastInfiniteRow : styles.infiniteRow;

      rowComponents.push(
        <Row className={rowClassname} key={rowIndex}>
          {row.map( (service:ClientService, rowItemIndex:number) =>{
            let colStyle = lastRow ? {flexBasis: (100/this.state.itemsPerRow) + '%', flexGrow: 0} : null;
            return (
              <Col  className={styles.col} key={rowItemIndex} style={colStyle}>
                <ServiceCard service={service} loginStatus={loginStatus} openEditModal={this.props.openEditModal}/>
              </Col>
            );
          })}
        </Row>
      );
    });

    if(rowComponents.length < 1 && !this.props.loading){
      rowComponents.push(
        <Col key={1} className={styles.notFound}>
          <h3>No services found</h3>
        </Col>
      );
    }

    return rowComponents;
  }

  render(){
    let rowComponents = this.getRows();
    return (
      <Infinite 
        containerHeight={1152} 
        elementHeight={288}
        timeScrollStateLastsForAfterUserScrolls={0}
        useWindowAsScrollContainer>
          {rowComponents}
      </Infinite>
    );
  }
}