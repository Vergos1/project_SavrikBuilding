import style from './AboutSection.module.scss';



const AboutSection = () => {
  return (
   <section id="about" className={style.about}>
     <div className="container">
       <h2 className={style.title}>про терки</h2>
       <p className={style.description}>
         Ідеально рівні терки "Тема Така", виготовлені з високоякісного пластику. Данні терки з
         жорсткою підошвою швидко та якісно формують кут не пошкоджуючи сусідню стіну .
         За рахунок своєї конструкції мають три робочих грані, що робить їх дуже універсальними.
         Вони надруковані на 3Д принтері та використовуются в парі з шліфувальними кругами від жирафа радіусом 225мм та
         180мм.
       </p>
       <p className={style.description}>
         Також, в наявності ультратонкий утюжок, який ідеально підійде для шліфування у важкодоступних місцях ,
         наприклал - за віконними завісами,батареями, нішами тощо.
       </p>
     </div>
   </section>
  )
}

export default AboutSection;