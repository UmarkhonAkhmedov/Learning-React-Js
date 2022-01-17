import MeetupDetail from '../../components/meetups/MeetupDetail'

function MeetupDetails() {
  
  return (
    <>
      <MeetupDetail image="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/tcx040121pinaultmuseum-004-1621303048.jpg" title="First Meetup" address="Some Streent, Some city" decription="Some text"/>
    </>
  )
}
export async function getStaticPath(){
  return {
    paths: [
      {params: {
        meetupId: 'm1'
      }}
    ]
  }
}

export async function getStaticProps(context){
  const meetupId = context.params.meetupId
  
  return {
    props: {
      meetupData: {
        image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/tcx040121pinaultmuseum-004-1621303048.jpg',
        id: meetupId,
        title: 'First Meetup',
        address: 'Some Streent, Some city',
        description: 'Some text'
      }
    }
  }
}

export default MeetupDetails
