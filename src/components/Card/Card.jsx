import React from 'react';
import caloriesImg from "../../assets/cardImg/calories.png";
import time from "../../assets/cardImg/time.png";
import {Link} from "react-router-dom";
import CardBookMark from "../UI/svgImages/CardBookMark/CardBookMark";
import classes from "./Card.module.scss";
import ButtonArrow from "../UI/buttons/ButtonArrow";
import {useDispatch, useSelector} from "react-redux";
import {addRecipe, deleteRecipe, selectCartByID} from "../../redux/cartSlice";

const Card = (props) => {
    const {id, title, category, categoryImg, imageUrl, cookingTime, calories} = props;
    const dispath = useDispatch();
    const likedCardById = useSelector(selectCartByID(id));

    function saveRecipe() {
        likedCardById ? dispath(deleteRecipe(id)): dispath(addRecipe(props))
    }

    return (
       <>
           <div className={classes.container}>
               <CardBookMark onClick={() => saveRecipe()} flag={likedCardById} />
               <h1 className={classes.title}>{title}</h1>
               <div className={classes.container__categories}>
                   <div className={classes.categories__mainCategory}>
                       <img width='26px' height='26px' alt='img' src={categoryImg}/>
                       <p className={classes.mainCategory__name}>{category}</p>
                   </div>
                   <div className={classes.categories__categoryBlock}>
                       <img height='18px' width='18px' alt='img' src={caloriesImg}/>
                       <p className={classes.categoryBlock__name}>{calories} кл</p>
                   </div>
                   <div className={classes.categories__categoryBlock}>
                       <img height='18px' width='18px' alt='img' src={time}/>
                       <p className={classes.categoryBlock__name}>{cookingTime} м.</p>
                   </div>
               </div>
               <img className={classes.foodImg} alt='food' src={imageUrl} />
               <Link to={`/recipe/${id}`}>
                   <ButtonArrow/>
               </Link>
           </div>
       </>
    );
};

export default Card;