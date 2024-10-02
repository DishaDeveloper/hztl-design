import {InformationComponentProps} from './InformationComponent.types';

const defaultData:InformationComponentProps = {
    uid: '61b5bef1-2ccc-432d-9dce-ca90ff1552ag',
    componentName: 'PromoComponent',
    dataSource: '{205A0FBA-59F1-4C7D-BC7C-845EEC4EC97B}',
    params: {
    },
    fields: {
        variant:'leftImage',
        // variant:'rightImage',
        headingTitle:"CHANGING WHAT'S POSSIBLE, FOR EVERYONE",
        description: {
            value:'Trade is the lifeblood of the global economy, creating opportunities and improving the quality of life for people around the world. DP World exists to make the world’s trade flow better, changing what’s possible for the customers and communities we serve globally.',
          },
          image: {
            value: {
              src: 'https://dpwprod.azureedge.net/-/media/Project/DPWG/DPWG-Tenant/Corporate/Global/Images/About-Us/People-2.jpg?rev=f9ad7dad2c754bf88233899ce8f3e9a2&cx=0&cy=0&cw=560&ch=315&hash=DDEFBD7D4F141484DA5520DFF30A2B3A',
              alt: 'creative-strategy',
              width: '48',
              height: '48',
            },
          },
          promoLink: {
            value: {
              href: 'https://www.horizontaldigital.com',
              text: 'Learn More About Us',
              linktype: 'external',
              target: '_blank',
            },
          },
    }
}
export default defaultData;