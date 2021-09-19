const Form = () => {

    function handleSubmit(e){
        e.preventDefault()
        console.log("form submitted");
        var templateParams = {
            name: 'James',
            notes: 'Check this out!'
        };
         
        window.emailjs.send('service_qt0z6y7', 'template_dgzfkgs', templateParams)
            .then(function(response) {
               console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
               console.log('FAILED...', error);
            });
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <button type="submit">submit</button>
        </form>
     );
}
 
export default Form;