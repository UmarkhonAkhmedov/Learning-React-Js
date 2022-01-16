import MeetupList from '../components/meetups/MeetupList'


const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/tcx040121pinaultmuseum-004-1621303048.jpg',
    address: 'Some address 5, 12345 Some City',
    description: 'This is a first meetup!'
  },
  {
    id: 'm2',
    title: 'A First Meetup',
    image: 'https://www.ne-mo.org/fileadmin/_processed_/6/0/csm_3._Musee_Louvre_pyramide_interieur__c_2017_Olivier_Ouadah_w_cf0bc3c5c8.jpg',
    address: 'Some address 5, 12345 Some City',
    description: 'This is a first meetup!'
  }
]

function HomePage() {
  return (
      <MeetupList meetups={DUMMY_MEETUPS}/>
  )
}

export default HomePage
