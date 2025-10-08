import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "dianvergel@gmail.com",
    pass: "xfef lgjb vhjo quer",
  },
  tls: {
    ciphers: 'SSLv3'
  }
})

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)

    const {
      name,
      email,
      phone,
      message,
    } = body

    let content: string = ""

    content += `<b>Name:</b> ${name} <br />`
    content += `<b>Email:</b> ${email} <br />`
    content += `<b>Phone:</b> ${phone} <br />`
    content += `<b>Message:</b> ${message}`

    await transporter.sendMail({
      from: "WEBSITE",
      to: "info@dogadoga.agency",
      subject: "HELLO",
      html: content,
    })

    return {
      status: 200,
      message: "ok",
    }
  } catch (error) {
    return {
      status: 400,
      message: error,
    }
  }
})
