import Same from './Same'
const a={x:<div tabIndex="0">tab index 0</div>,y:<div tabIndex="1">tab index 1</div>,z:<div tabIndex="2">tab index 2</div>};
const sr="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/recipes/perfect_cheeseburger_recipe/300x300_perfect_cheeseburger_recipe.jpg?resize=300px:*";
const Tabindex=()=><>{a.x}{a.y}{a.z}<hr/> <img src={sr} alt="nico robin" /><li><Same /></li></>

export default Tabindex