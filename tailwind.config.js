/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        pri:'#00152A',
        bgcard:'#7C7C7C',
        greentrans:'#8FD34D1A',
        greenn:"#8FD34D",
        graytxt:"#94A8BD",
        iconcol:"#8EC0F3",
        yell:"#F9C714",
        bluee:'#0779EB'
      },
      fontFamily:{
        custom:['Helvetica',"sans-serif"],
      },
      fontSize:{
        mdheading:"1.8rem",
        mdbutton:"1rem",
        mdsubheading:"1rem",
        mdsubsubheading:"0.9rem",
        lgheading:"2.2rem",
        lgsubheading:"2rem",
        lgbtn:"1.8rem",
        lgsubsubheading:"1.4rem"
      }
      
    },
  },
  plugins: [],
}

