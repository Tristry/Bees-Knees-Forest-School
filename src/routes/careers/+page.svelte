<script lang="ts">
  import { enhance } from "$app/forms";
  import Button from "$lib/components/Button.svelte";
  import { Input } from "$lib/components/ui/Input/index";
  import Label from "$lib/components/ui/label/label.svelte";
  import { Textarea } from "$lib/components/ui/textarea";
  import { Check, Loader2 } from "lucide-svelte";
  import * as AlertDialog from "$lib/components/ui/alert-dialog";
  import * as Select from "$lib/components/ui/select";

  let isSubmitting = false;
  let message = "";
  let email = "";
  let phone = "";
  let fullName = "";
  let qualification = "";
  $: console.log(message.length);
  $: messageLength = message.length;
  let showSuccessMessage = false;

  const sendMessage = async () => {
    try {
      isSubmitting = true;
      // Use the form data dynamically to construct the URL
      let url = `https://mc.us21.list-manage.com/subscribe/landing-page?u=b332e3f7e0a8487342bdb97bf&id=7c80a1c4a8&f_id=00a582e6f0&FNAME=${encodeURIComponent(
        fullName
      )}&EMAIL=${encodeURIComponent(email)}&PHONE=${encodeURIComponent(
        phone
      )}&MESSAGE=${encodeURIComponent(message)}&QUAL=${encodeURIComponent(
        qualification
      )}&b_b332e3f7e0a8487342bdb97bf_318843=&ht=9afa2c4d4d4fd4badcad860e4fe80599c9a388dc%3AMTcyODczNzgzNC4xOTA5&c=dojo_request_script_callbacks.dojo_request_script2`;

      // Create the form data object to be sent with the POST request
      const contactData = {
        fields: {
          1501: email, // Field for email
          1504: fullName, // Field for full name
          1505: phone, // Field for phone number
          1503: message, // Field for message
          1506: qualification, // Adding qualification field
        },
        subscribe: false,
      };

      // Send the POST request with dynamic data
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
      });

      // Handle successful submission
      isSubmitting = false;
      showSuccessMessage = true;
      return { success: true };
    } catch (err) {
      // Handle errors
      isSubmitting = false;
      console.error("Error sending message:", err);
      return { success: false };
    }
  };
</script>

<section
  id="contact"
  class="flex -mb-10 max-md:mb-0 max-md:container h-[calc(100vh-64px)] gap-10"
>
  <div class="w-1/2 max-md:hidden">
    <img
      src="https://res.cloudinary.com/dk8kuqbbc/image/upload/v1698693970/contact.webp"
      alt=""
      class="w-full h-full object-cover"
    />
  </div>
  <div class="w-1/2 mt-8 max-md:mt-2 max-md:w-full">
    <div class=" h-full max-w-[600px] max-md:text-left mt-5">
      <h1 class="text-3xl max-md:text-2xl text-[#CF572B] font-semibold">
        Career
      </h1>
      <p class="my-3 max-md:text-sm max-md:leading-6 leading-7">
        Passionate about inspiring the next generation through nature? We're
        always eager to connect with enthusiastic, nature-loving individuals who
        share our values. Fill out the form below to introduce yourself!
      </p>
      <form on:submit|preventDefault={sendMessage} class="space-y-4 mt-2">
        <div class="space-y-2">
          <Label for="fullName">What's your qualifications</Label>
          <Select.Root
            onSelectedChange={(e) => (qualification = e?.value + "")}
          >
            <Select.Trigger>
              <Select.Value placeholder="Qualifications" />
            </Select.Trigger>
            <Select.Content>
              <Select.Item value="Level 1">Level 1</Select.Item>
              <Select.Item value="Level 2">Level 2</Select.Item>
              <Select.Item value="Level 3">Level 3</Select.Item>
              <Select.Item value="Internship">Internship</Select.Item>
              <Select.Item value="Other">Other</Select.Item>
            </Select.Content>
          </Select.Root>
        </div>
        <div class="space-y-2">
          <Label for="fullName">Full Name</Label>
          <Input
            bind:value={fullName}
            type="text"
            name="fullName"
            placeholder="Enter your full name here"
          />
        </div>
        <div class="space-y-2">
          <Label for="email">Email*</Label>
          <Input
            bind:value={email}
            type="email"
            name="email"
            required
            placeholder="Enter your email address here"
          />
        </div>
        <div class="space-y-2">
          <Label for="phone">Phone</Label>
          <Input
            bind:value={phone}
            type="tel"
            name="phone"
            placeholder="Enter your phone number here"
          />
        </div>
        <div class="space-y-2">
          <Label for="message">Message</Label>
          <Textarea
            name="message"
            required
            placeholder="Enter your message here"
            bind:value={message}
            maxlength={800}
          />
          {#if messageLength >= 800}
            <p class="text-sm text-red-500">
              The message must not be bigger than 800 characters
            </p>
          {/if}
        </div>
        <Button
          variant="RED"
          disabled={isSubmitting}
          style={`display:flex; justify-content:center; align-items-center; margin-top:15px;`}
        >
          {#if isSubmitting}
            <Loader2 class="mr-2 h-4 w-4 mt-[2px] animate-spin" />
          {/if}
          Send
        </Button>
      </form>
    </div>
  </div>
</section>

<AlertDialog.Root open={showSuccessMessage}>
  <AlertDialog.Content>
    <AlertDialog.Header>
      <AlertDialog.Title class="flex items-center">
        <Check class="h-4 w-4 mr-2" />
        <p>Message sent successfully</p>
      </AlertDialog.Title>
      <AlertDialog.Description
        >We have recieved your message. We will get back to you shortly</AlertDialog.Description
      >
    </AlertDialog.Header>
    <AlertDialog.Footer>
      <AlertDialog.Cancel>Close</AlertDialog.Cancel>
    </AlertDialog.Footer>
  </AlertDialog.Content>
</AlertDialog.Root>
