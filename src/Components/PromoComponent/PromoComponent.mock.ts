import {PromoComponentProps} from './PromoComponent.types';

const defaultData:PromoComponentProps = {
    uid: '61b5bef1-2ccc-432d-9dce-ca90ff1552ag',
    componentName: 'PromoComponent',
    dataSource: '{205A0FBA-59F1-4C7D-BC7C-845EEC4EC97B}',
    params: {
    },
    fields: {
        variant:'leftImage',
        // variant:'rightImage',
        headingTitle:"WHY DP WORLD",
        description: {
            value:'Our dedicated team of more than 100,000 employees from over 160 nationalities ensure the smooth flow of trade. As an equal employer that recognises and values diversity and an inclusive culture, we empower and up-skill our people with opportunities to perform at their best.',
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
              text: 'View Careers',
              linktype: 'external',
              target: '_blank',
            },
          },
    }
}
export default defaultData;