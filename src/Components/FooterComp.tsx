import React from 'react';

import { ReactComponent as IconFacebook } from "./../Assets/Images/icon-facebook.svg";
import { ReactComponent as IconPinterest } from "./../Assets/Images/icon-pinterest.svg";
import { ReactComponent as IconInstagram } from "./../Assets/Images/icon-instagram.svg";

import SocialComp from './SocialComp';

function FooterComp() {
  return (
    <div className="flex space-x-6">
      <SocialComp
        icon={IconFacebook}
        link={'https://www.facebook.com/moazzemhossainnahid'}
        label={'Facebook'} />
      <SocialComp
        icon={IconPinterest}
        link={'https://www.pinterest.com/moazzemhossainnahid'}
        label={'Pinterest'} />
      <SocialComp
        icon={IconInstagram}
        link={'https://www.instagram.com/moazzemhossainnahid'}
        label={'Instagram'} />
    </div>
  )
}

export default FooterComp;
