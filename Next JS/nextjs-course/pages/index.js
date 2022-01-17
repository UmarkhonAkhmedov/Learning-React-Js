import MeetupList from '../components/meetups/MeetupList'
import { useEffect, useState } from 'react'

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
    title: 'A Second Meetup',
    image: 'https://www.ne-mo.org/fileadmin/_processed_/6/0/csm_3._Musee_Louvre_pyramide_interieur__c_2017_Olivier_Ouadah_w_cf0bc3c5c8.jpg',
    address: 'Some address 5, 12345 Some City',
    description: 'This is a second meetup!'
  }
]

function HomePage(props) {
  return (
      <MeetupList meetups={props.meetups}/>
  )
}

// export async function getServerSideProps(context){
//   const req = context.req
//   const res = context.res
//   // fetch data from an API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   }
// }

export async function getStaticProps(props){
  // fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS
    },
    revalidate: 1
  }
}

export default HomePage
