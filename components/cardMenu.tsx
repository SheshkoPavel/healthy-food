import { useEffect, useState } from 'react';
import Select from 'react-select';

const DropdownIndicator = (props: any) => {
  return (
    <div className="c-content-card__type-menu-button">
      <span className="c-content-card__type-menu-button-icon c-icon c-icon--ellipsis"></span>
    </div>
  );
};

const Menu = (props: any) => {
  return (
    <div className="c-content-card__type-menu-overflow">
      {/* toggle className c-link--icon-reverse-like -> c-link--icon-reverse-like-filled onClick */}
      <span onMouseDown={console.log} onClick={() => console.log(123)} className="c-content-card__type-menu-overflow-link c-link c-link--white c-link--icon-reverse c-link--icon-reverse-like">Save to likes</span>
      {/* toggle className c-link--icon-reverse-calendar -> c-link--icon-reverse-calendar-added onClick */}
      <a href={'#'} className="c-content-card__type-menu-overflow-link c-link c-link--white c-link--icon-reverse c-link--icon-reverse-calendar">Add to calendar</a>
      <a href={'#'} className="c-content-card__type-menu-overflow-link c-link c-link--white c-link--icon-reverse c-link--icon-reverse-share">Share</a>
    </div>
  );
};


export const CardMenu = ({ menu, id }: any) => {
  const [menuPortalTarget, setMenuPortalTarget] = useState<any>();

  useEffect(() => {
    setMenuPortalTarget(document.body)
  }, [])

  return (
    <Select
      inputId={`input-${id}`}
      instanceId={`instance-${id}`}
      openMenuOnFocus={true}
      value={''}
      onChange={console.log}
      options={[]}
      components={{ Menu: () => menu, DropdownIndicator }}
      // isRtl={true}
      placeholder={''}
      menuPortalTarget={menuPortalTarget && document.body.getElementsByClassName('l-layout')[0]}
      // menuIsOpen={true}
      styles={{
        control: (baseStyles, state) => ({
          width: '4rem',
          height: '0px',
          marginLeft: 'auto',
        }),
        input: (baseStyles, state) => ({
          fontSize: '0px'
        }),
      }}
    />
  )
};

