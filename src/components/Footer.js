import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const location = useLocation();
  const currentPath = location.pathname;
  const { t } = useTranslation();
  const activeFilter = 'invert(78%) sepia(24%) saturate(1531%) hue-rotate(124deg) brightness(85%) contrast(100%)';
  const activeColor = '#15d5c7';

  return (


 <nav>
  
                <div className="tabbar center fixed bottom-0 left-0 w-full  rounded-t-2xl bg-layer4">
            <button
              className="button flex h-full w-1/2 flex-1 flex-col items-center justify-center px-1 py-2" type="button">
              <div className="color_icon_img menu_p" tabbar="true" style={{ transform: 'scale(0.8)' }}></div>
              <p className="mt-0.5 text-xs font-extrabold text-secondary">Menu</p>
            </button>
            <button className="button flex h-full w-1/2 flex-1 flex-col items-center justify-center px-1 py-2"
              type="button">
              <div className="color_icon_img explore_p" tabbar="true" style={{ transform: 'scale(0.8)' }}></div>
              <p className="mt-0.5 text-xs font-extrabold text-secondary">Explore</p>
            </button>
            <button className="button flex h-full w-1/2 flex-1 flex-col items-center justify-center px-1 py-2"
              type="button">
              <div className="color_icon_img casino_p" tabbar="true" style={{ transform: 'scale(0.8)' }}></div>
              <p className="mt-0.5 text-xs font-extrabold text-secondary">Casino</p>
            </button><button className="button flex h-full w-1/2 flex-1 flex-col items-center justify-center px-1 py-2"
              type="button">
              <div className="color_icon_img sports_p" tabbar="true" style={{ transform: 'scale(0.8)' }}></div>
              <p className="mt-0.5 text-xs font-extrabold text-secondary">Sports</p>
            </button><button className="button flex h-full w-1/2 flex-1 flex-col items-center justify-center px-1 py-2"
              type="button">
              <div className="color_icon_img chat_p" tabbar="true" style={{ transform: 'scale(0.8)' }}></div>
              <p className="mt-0.5 text-xs font-extrabold text-secondary">Chat</p>
            </button></div>
        </nav>

          );
}