import NewMeetupForm from '../../components/meetups/NewMeetupForm'

function NewMeetUpPage() {
  function addMeetupHandler(enteredMeetupData){
    console.log(enteredMeetupData)
  }
  return (
    <div>
      <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </div>
  )
}

export default NewMeetUpPage
