import ShinyText from '../ShinyText';

// Need to use PascalCasing for all react projects
function Message() {
    // JSX = JavaScript XML
    return <ShinyText text="Hello World!" disabled={false} speed={3} className='custom-class' />

}

export default Message