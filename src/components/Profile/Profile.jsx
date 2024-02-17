import React from 'react'
import { useState } from "react";
import photo from "../assets/image/ppp.png";
import back1 from "../assets/image/backg.png";


const Profile = () => {

  const [dateAffichee, setDateAffichee] = useState(new Date());

  // Méthode pour calculer la semaine précédente
  const semainePrecedente = () => {
    const nouvelleDate = new Date(dateAffichee);
    nouvelleDate.setDate(nouvelleDate.getDate() - 7);
    setDateAffichee(nouvelleDate);
  };

  // Méthode pour calculer la semaine suivante
  const semaineSuivante = () => {
    const nouvelleDate = new Date(dateAffichee);
    nouvelleDate.setDate(nouvelleDate.getDate() + 7);
    setDateAffichee(nouvelleDate);
  };

  // Fonction pour générer les créneaux horaires
  const genererCreneaux = () => {
    const creneaux = [];
    const joursSemaine = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];

    for (let jour of joursSemaine) {
      creneaux.push(
        <div key={jour}>
          <h2>{jour}</h2>
          {/* Affichage des créneaux horaires pour chaque jour */}
          {/* Vous pouvez remplacer cette boucle par votre liste de rendez-vous */}
          {Array.from({ length: 9 }, (_, index) => (
            <p key={index}>{index % 2 === 0 ? '0' + index / 2 : (index / 2) + ':30'}</p>
          ))}
        </div>
      );
    }

    return creneaux;
  };


  return (
    <div className='w-full bg-white '>
        <div className="w-30 h-30 bg-white absolute l-2 t-10 rounded-full"></div>
    <div className="container sm:w-4/5  bg-yellow w-full sm:flex-row flex-col items-center flex">
<img src= {photo}alt="photohh" className='w-1/3 md:w-"3/5'/>
    <p className='text-smallTextColor font-[400]  relative'>
      <img src={back1} className='absolute l-3 w-20 h-20 z-5' alt="" />
    <h1 className=' text-headingColor font-[800] text-[1.9rem] z-50'>ZOENIRINA Marie Viviane</h1>
        En tant que développeur, je peux donne vie à vos idées par la création d'application robuste, fonctionnel et responsives.</p> 
    </div>

<div className="animate-ping absolute rounded-full border-[3px] border-yellow-400 l-3 t-3 w-5 h-5 bg-white"></div>


    {/* test calendrier */}
    <div>
      <h1>Calendrier de prise de rendez-vous</h1>
      {/* Boutons de navigation */}
      <button onClick={semainePrecedente}>Semaine précédente</button>
      <button onClick={semaineSuivante}>Semaine suivante</button>
      {/* Affichage de la date actuellement affichée */}
      <h2>{dateAffichee.toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</h2>
      {/* Affichage des créneaux horaires pour chaque jour de la semaine */}
      <div style={{ display: 'flex' }}>
        {genererCreneaux()}
      </div>
    </div>
    </div>
  )
}

export default Profile