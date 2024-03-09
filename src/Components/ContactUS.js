import { useState, useRef } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import emailjs from "@emailjs/browser";

export default function ContactUS() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_59urarb", "template_krv55c8", form.current, {
        publicKey: "icZF07xDoTfUNVTov",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <Box
      id="contact_us_container"
      sx={{
        margin: 5,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        flexDirection: { xs: "column", lg: "row" },
      }}
    >
      <Box sx={{ width: { xs: "100%", lg: "50%" } }}>
        <Typography variant="h4" align="center" mb={2}>
          Contact Us
        </Typography>
        <form ref={form} onSubmit={sendEmail}>
          <TextField
            fullWidth
            label="Name"
            name="user_name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            name="user_email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            required
            type="email"
          />

          <TextField
            fullWidth
            label="Phone"
            name="user_phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            margin="normal"
            required
            type="phone"
          />

          <TextField
            fullWidth
            label="Message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            margin="normal"
            required
            multiline
            rows={4}
          />
          <Button
            variant="contained"
            type="submit"
            value="Send"
            sx={{ mt: 2, width: "100%" }}
          >
            Submit
          </Button>
        </form>
      </Box>

      <Box
        style={{
          maxWidth: 500,
          margin: "0px 80px",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            pb: 8,
            // color: "#5e5e5e"
          }}
        >
          Thank you for visiting the website of GM Global. If you have any
          questions about our engineering services, reach out to us today. We
          will get back to you as soon as possible. We hope to hear from you
          soon.
        </Typography>

        <Typography color="primary" variant="h5" sx={{ pb: 4 }}>
          GM Global
        </Typography>
        <Typography variant="h6" sx={{ pb: 2, color: "#5e5e5e" }}>
          1-50 Valleyview Road, Kitchener, Ontario N2E 1L6
        </Typography>
        <Typography color="primary" variant="h6" sx={{ pb: 4 }}>
          (647) 606-4423
        </Typography>
        <Typography color="primary" variant="h5" sx={{ pb: 4 }}>
          Hours
        </Typography>
        <Typography variant="h6">Mon 09:00 a.m. – 05:00 p.m.</Typography>
        <Typography variant="h6">Tue 09:00 a.m. – 05:00 p.m.</Typography>
        <Typography variant="h6">Wed 09:00 a.m. – 05:00 p.m.</Typography>
        <Typography variant="h6">Thu 09:00 a.m. – 05:00 p.m.</Typography>
        <Typography
          variant="h6"
          sx={{
            color: "#403e3e",
            fontWeight: 900,
          }}
        >
          Fri 09:00 a.m. – 05:00 p.m.
        </Typography>
        <Typography variant="h6">Sat Closed</Typography>
        <Typography variant="h6">Sun Closed</Typography>
      </Box>
    </Box>
  );
}
