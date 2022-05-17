import React from "react";
import Link from "next/link";

function SkillList(props) {

  var path = [{
    title: "basic feature",
    detail: [{ name: "data fetching : getStaticProps (ขณะ build จะใช้ค่า props ในขณะนั้นและจะไม่สามารถเปลี่ยนแปลงค่าได้)", url: '/static' },
    { name: "data fetching : getServerSideProps (หลัง build จะเปลี่ยนแปลงค่าได้เพราะเป็นการรับ props เพื่อ render ที่ server)", url: '/ssr' },
    { name: "static file serving (ที่อยู่ไฟล์พื้นฐาน public)", url: '/file' }]
  }, {
    title: "Routing",
    detail: [{ name: "Dynamic Routes 1 (ส่ง parameter ผ่าน path 1 ตัว)", url: '/routing/ex1' },
    { name: "Dynamic Routes 2 (ส่ง parameter ผ่าน path 1 ตัวไปที่โฟลเดอร์)", url: '/routing/1/setting' },
    { name: "Dynamic Routes 3 (ส่ง parameter ผ่าน path หลายตัว)", url: '/routing/ex3/1/2' },
    { name: "Route navigate (Link สำหรับ Next-Link)", url: '/navigate' }]
  }, {
    title: "Customize",
    detail: [{ name: "Custom Server (run Express บน NextJS)", url: '/test-view-page' },
    { name: "Custom App (ใช้ส่ง props หรือค่าต่างๆไปทุกๆ component)", url: '/' },
    { name: "Custom Document (ส่วนหัวของ HTML)", url: '/' }]
  }, {
    title: "Style Sheet",
    detail: [{ name: "Style inline (ใช้แบบเดียวกันกับ ReactJS)", url: '/css' },
    { name: "Global Stylesheet (ไฟล์ CSS ปกติ แต่กำหนดไว้บนสุดเพื่อเป็น Global)", url: '/' },
    { name: "Component-Level CSS (สร้าง css เป็น module แล้วนำไป import ใน compomnents ต่างๆเพื่อใช้งานเป็น className)", url: '/css' }]
  }]

  return (
    <>
      <h1>{props.children}</h1>
      <ul>
        {path.map((item, idx) =>
          <li key={idx}>
            {idx + 1} {item.title}
            <ul>
              {item.detail.map((items, idxs) =>
                <li key={idxs}>
                  <Link href={items.url}>{items.name}</Link>
                </li>
              )}
            </ul>
          </li>
        )}
      </ul>
    </>
  );
}

export default SkillList;
