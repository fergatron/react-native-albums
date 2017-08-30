import React from 'react';
import { ToolbarAndroid } from 'react-native';

const Header = (props) => {
  const { headerText } = props;

  const actions = [
    {
      title: 'Settings',
      show: 'never'
    },
    {
      title: 'About',
      show: 'never'
    }
  ];

  return (
    <ToolbarAndroid
      style={styles.toolbar}
      title={headerText}
      titleColor='#fff'
      actions={actions}
    />
  );
};

const styles = {
  toolbar: {
    backgroundColor: '#708090',
    height: 56
  }
};

export default Header;
