import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import moment from 'moment';
import FmbContext from '../../context/FmbContext';
import ExpandableContainer from '../ExpandableContainer/ExpandableContainer';
import TravelRoute from '../TravelRoute/TravelRoute';
import { themes } from '../../themes/Themes';
import FMButton from '../Buttons/FMButton';

const style = {
  container: {
    width: '22rem',
    height: '75%',
    marginTop: themes.mediumSpace,
    textAlign: 'left',
    padding: themes.mediumSpace,
    backgroundColor: 'rgba(0,0,0, 0.5)',
    borderRadius: themes.standardRadius,
    boxSizing: 'border-box',
    display: 'flex',
    flexFlow: 'column nowrap',
    overflowY: 'auto',
    color: 'white'
  },
  top: {
    display: 'flex',
    flexFlow:'column nowrap',
    alignItems: 'center'
  }
}

const OpeningHours = ({result}) => {
  const today = moment().format('YYYY-MM-DD');
  const openToday = result.openingHours[today].from;
  const closeToday = result.openingHours[today].to;

  const tomorrow = moment().add(1, 'd').format('YYYY-MM-DD');
  const openTomorrow = result.openingHours[tomorrow].from;
  const closeTomorrow = result.openingHours[tomorrow].to;

  return (
    <div style={{display: 'flex', flexFlow: 'column nowrap', fontSize: '0.6rem', alignItems: 'flex-end'}}>
      <span style={{fontWeight: '800', fontVariant: 'all-small-caps', fontSize: '1rem'}}>Öppettider</span>
      <span><span style={{fontWeight: '600'}}>Idag:</span> {closeToday == '00:00' ? 'Stängt' : openToday + ' - ' +  closeToday}</span>
      <span><span style={{fontWeight: '600'}}>Imorgon:</span> {closeTomorrow == '00:00' ? 'Stängt' : openTomorrow + ' - ' +  closeTomorrow}</span>
    </div>
  )
}

const NoHits = () => {
  return <div>Inga systembolag matchade din sökning :(
    <Link to='/' style={{ textDecoration: 'none', width: '100%' }}>
      <FMButton
        label='Tillbaka till sök'
        color={themes.standardTextColor}
        bgcolor={themes.primaryButton}
      />
    </Link>
  </div>
}

const Result = ({result}) => {
  return (
    <ExpandableContainer
      label={result.name}
      subLabel={result.street}
      labelRight={<OpeningHours result={result} />}
      labelStyle={{fontSize: '1.4rem'}}
      subLabelStyle={{fontVariant: 'all-small-caps'}}
    >
      <TravelRoute store={result} />
    </ExpandableContainer>
  );
}

const Results = () => {
  const context = useContext(FmbContext);

  return (
    <div 	style={style.container}>
      <div style={style.top}>
        <h2>Närmaste Systembolag</h2>
        { context.results.length > 0
          ? <div>{context.results.length} Systembolag har produkte{context.selectedProducts.length > 1 ? 'rna' : 'n'}:</div>
          : <NoHits />
        }
      </div>
      { context.results &&
        context.results.map((result, index) => <Result result={result} index={index+1} key={index+1} />)
      }
    </div>
  );
}

export default Results;