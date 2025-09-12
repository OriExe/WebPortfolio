<!-- modify this form HTML and place wherever you want your form -->
<template>

    <h1>Contact Me form</h1>
    <div class="content">
        <form
        action="#FormspreeLink" 
        method="POST"
        >
      <label>
           Email:
          <input type="email" name="email">
        </label>
        <br></br>
        <label>
            Subject:
            <input type="text" name="Subject">
        </label>
        <br></br>
        <label>
            Message:
            <textarea name="message"></textarea>
        </label>
        <!-- your other form fields go here -->
        
        <!-- <button type="submit">Send</button>-->
        
        </form>
    </div>
</template>


