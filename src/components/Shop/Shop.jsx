import React from 'react'
import NavBar from '../UI/NavBar/NavBar'
import main_hudi from '../../img/hudi_main_space_x.webp'
import stili from './Shop.module.css'
import joggers from '../../img/SpaceXJoggers.webp'
import hoodie from '../../img/SpaceXHoodie_900.webp'
import tshirt from  '../../img/XTeeUnisexBlack_900x.webp'
import ziphoodie from '../../img/XFullZipUnisexBlack2_900x.webp'
import womensZip from '../../img/womensZip.webp'
import cart from '../../img/cart.png'

const Shop = () => {
  return (
    <div>
      <NavBar/>
        <div>
        <img src={main_hudi} alt="" className={stili.main_img_hudi} />
        </div>

        <div className={stili.header}>
            <h1>Trending</h1>
        </div>

        <div className={stili.container_market}>
          <ul className={stili.list}>

            <li className={stili.block_items_shop}>
              
              <div>
              <img className={stili.images_items}  src={joggers} alt="" />
              <p><a href="">9$</a></p>
              <p><a href="">Add to cart <img style={{width:'5%', position:'relative', top:8.5}} src={cart} alt="" /></a></p>
              </div>
              
              </li>

            <li className={stili.block_items_shop}>
              
              <div>
              <img className={stili.images_items}  src={hoodie} alt="" />
              <p><a href="">19$</a></p>
              <p><a href="">Add to cart <img style={{width:'5%', position:'relative', top:8.5}} src={cart} alt="" /></a></p>

              </div>
              
              </li>


            <li className={stili.block_items_shop}>
              
              <div>
              <img className={stili.images_items}src={tshirt} alt="" />
              <p><a href="">49$</a></p>
              <p><a href="">Add to cart <img style={{width:'5%', position:'relative', top:8.5}} src={cart} alt="" /></a></p>

              </div>
              
              </li>

            <li className={stili.block_items_shop}><div>
              <img className={stili.images_items}src={ziphoodie} alt="" />
              <p><a href="">39$</a></p>
              <p><a href="">Add to cart <img style={{width:'5%', position:'relative', top:8.5}} src={cart} alt="" /></a></p>

              </div></li>


            <li className={stili.block_items_shop}><div>
              <img className={stili.images_items} src={womensZip} alt="" />
              <p><a href="">99$</a></p>
              <p><a href="">Add to cart <img style={{width:'5%', position:'relative', top:8.5}} src={cart} alt="" /></a></p>

              </div></li>


          </ul>
        </div>
    </div>
  )
}

export default Shop
