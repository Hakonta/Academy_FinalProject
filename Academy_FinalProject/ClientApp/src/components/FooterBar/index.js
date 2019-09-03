import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

const styles={
  color:'grey',
  textAlign: 'center',
  height: '40px'
  // display: flex,
  // flexFlow: row-wrap,
  // justifyContent: flex-end
  
}


export class Footer extends React.Component{
  render(){
  return (
      <div className="fixed-bottom">
      <Card>
        <Card.Header style={styles}>This webpage was created by Academy students from batch #1</Card.Header>
      </Card>
    </div>
);
}}

export default Footer;
