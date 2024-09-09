
export default function Header() {
  return (
      <header className="bg-red-100 p-4 border-b-4 border-slate-400 flex justify-between">
        <div className="fsh-logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 196.94 34"
            width="197"
            height="34"
          >
            <path
              fill="#ee4236"
              d="M74.98.84c-2.14 0-3.69 1.32-3.69 3.92v8.75H57.52V4.76c0-2.6-1.55-3.92-3.69-3.92-2.14 0-3.69 1.32-3.69 3.92v8.8h-5.93l-4.92-11.2C38.72 1.07 37.43.25 36.01.28c-1.41.04-2.66.93-3.16 2.26l-6.93 18.54-2.39-5.44c-.55-1.26-1.8-2.08-3.18-2.08H8.56c-.04 0-.08 0-.12.01h-.83V7.89h10.1c2.33 0 3.69-1.28 3.69-3.42 0-2.05-1.37-3.42-3.69-3.42H3.92C2 1.05.23 2.37.23 4.74v25.13c0 2.6 1.55 3.92 3.69 3.92 2.14 0 3.69-1.32 3.69-3.92v-9.35h6.66c.07 0 .13 0 .2-.01h3.61L23 31.71c.56 1.27 1.81 2.08 3.18 2.08h.1c1.41-.04 2.66-.93 3.16-2.26l6.93-18.54 2.39 5.44c.55 1.26 1.8 2.08 3.18 2.08h8.2v9.41c0 2.6 1.55 3.92 3.69 3.92 2.14 0 3.69-1.32 3.69-3.92v-9.57h13.77v9.57c0 2.6 1.55 3.92 3.69 3.92 2.14 0 3.69-1.32 3.69-3.92V4.76c0-2.6-1.55-3.92-3.69-3.92z"
            ></path>
            <path d="M87.45 16.32h-.5c-.61 0-.99-.38-.99-.99 0-.56.42-.99.99-.99h.5v-1.16c0-1.66.99-2.57 2.37-2.57.8 0 1.57.24 1.57 1.02 0 .66-.3.96-.93.96-.38 0-.75 0-.75.83v.93h.71c.68 0 1.15.27 1.15.99 0 .71-.49.99-1.15.99h-.71v5.21c0 .75-.47 1.26-1.13 1.26-.66 0-1.13-.5-1.13-1.26v-5.22zM94.29 12.09c0 .71-.57 1.3-1.27 1.3-.68 0-1.27-.61-1.27-1.3 0-.64.6-1.24 1.27-1.24.68 0 1.27.58 1.27 1.24zm-2.4 3.41c0-.75.47-1.26 1.13-1.26.66 0 1.13.5 1.13 1.26v6.03c0 .75-.47 1.26-1.13 1.26-.66 0-1.13-.5-1.13-1.26V15.5zM95.62 15.37c0-.75.6-1.13 1.16-1.13.6 0 1.1.22 1.1.94h.03c.42-.63.88-.94 1.59-.94.55 0 1.1.39 1.1 1.21 0 .74-.68.79-1.35 1.1-.68.31-1.37.61-1.37 1.51v3.47c0 .75-.47 1.26-1.13 1.26-.66 0-1.13-.5-1.13-1.26v-6.16zM105.87 16.79c-.42 0-1.29-.66-2.03-.66-.41 0-.77.19-.77.63 0 1.05 3.93.89 3.93 3.47 0 1.51-1.27 2.65-3.22 2.65-1.27 0-3.16-.72-3.16-1.74 0-.35.35-1 .97-1 .88 0 1.27.77 2.34.77.69 0 .89-.22.89-.64 0-1.04-3.93-.88-3.93-3.47 0-1.57 1.27-2.64 3.06-2.64 1.12 0 2.83.52 2.83 1.63.02.51-.38 1-.91 1zM108.75 16.32h-.5c-.61 0-.99-.38-.99-.99 0-.56.42-.99.99-.99h.5v-1.35c0-.75.47-1.26 1.13-1.26.66 0 1.13.5 1.13 1.26v1.35h.64c.58 0 1.08.27 1.08.99 0 .71-.5.99-1.08.99h-.64v5.21c0 .75-.47 1.26-1.13 1.26-.66 0-1.13-.5-1.13-1.26v-5.21zM121.5 16.79c-.42 0-1.29-.66-2.03-.66-.41 0-.77.19-.77.63 0 1.05 3.93.89 3.93 3.47 0 1.51-1.27 2.65-3.22 2.65-1.27 0-3.16-.72-3.16-1.74 0-.35.35-1 .97-1 .88 0 1.27.77 2.34.77.69 0 .89-.22.89-.64 0-1.04-3.93-.88-3.93-3.47 0-1.57 1.27-2.64 3.06-2.64 1.12 0 2.83.52 2.83 1.63.02.51-.38 1-.91 1zM124.38 16.32h-.5c-.61 0-.99-.38-.99-.99 0-.56.42-.99.99-.99h.5v-1.35c0-.75.47-1.26 1.13-1.26.66 0 1.13.5 1.13 1.26v1.35h.64c.58 0 1.08.27 1.08.99 0 .71-.5.99-1.08.99h-.64v5.21c0 .75-.47 1.26-1.13 1.26-.66 0-1.13-.5-1.13-1.26v-5.21zM136.49 18.53c0 2.36-1.62 4.35-4.05 4.35-2.43 0-4.05-1.99-4.05-4.35 0-2.29 1.66-4.38 4.05-4.38 2.38 0 4.05 2.09 4.05 4.38zm-5.85 0c0 1.08.56 2.28 1.79 2.28s1.79-1.19 1.79-2.28c0-1.08-.55-2.31-1.79-2.31s-1.79 1.23-1.79 2.31zM137.29 15.5c0-.75.47-1.26 1.13-1.26.63 0 .99.35 1.13.94.42-.69 1.3-1.04 2.15-1.04 2.43 0 3.64 2.28 3.64 4.47 0 2.14-1.44 4.26-3.72 4.26-.71 0-1.48-.27-2.07-.79v2.76c0 .75-.47 1.26-1.13 1.26-.66 0-1.13-.5-1.13-1.26V15.5zm4.04 5.31c1.18 0 1.76-1.22 1.76-2.28 0-1.07-.58-2.31-1.76-2.31-1.21 0-1.77 1.13-1.77 2.23s.52 2.36 1.77 2.36zM149.81 11.86c0-.75.47-1.26 1.13-1.26.66 0 1.13.5 1.13 1.26v3.08h.03c.47-.58 1.35-.79 2.06-.79 1.77 0 3.09 1.13 3.09 3.05v4.33c0 .75-.47 1.26-1.13 1.26-.66 0-1.13-.5-1.13-1.26v-3.94c0-1.05-.66-1.55-1.48-1.55-.93 0-1.44.68-1.44 1.55v3.94c0 .75-.47 1.26-1.13 1.26-.66 0-1.13-.5-1.13-1.26v-9.67zM160.6 19.27c.16 1.12 1.08 1.63 2.14 1.63 1.16 0 1.96-.91 2.56-.91.49 0 .93.49.93.97 0 .97-2.01 1.92-3.69 1.92-2.54 0-4.24-1.85-4.24-4.35 0-2.29 1.66-4.38 4.05-4.38 2.45 0 4.07 2.23 4.07 4.11 0 .68-.3 1-.99 1h-4.83zm3.55-1.51c-.13-.99-.75-1.73-1.81-1.73-1 0-1.68.77-1.79 1.73h3.6zM175.18 21.31c0 .58 0 1.48-1.08 1.48-.66 0-.93-.36-1.08-.96-.58.69-1.29 1.05-2.15 1.05-2.12 0-3.74-1.81-3.74-4.35 0-2.48 1.66-4.38 3.74-4.38.83 0 1.65.33 2.15 1.04.06-.55.53-.94 1.08-.94 1.08 0 1.08.89 1.08 1.48v5.58zm-4.01-.5c1.18 0 1.74-1.19 1.74-2.28 0-1.08-.55-2.31-1.74-2.31-1.24 0-1.79 1.22-1.79 2.31 0 1.08.57 2.28 1.79 2.28zM176.67 11.86c0-.75.47-1.26 1.13-1.26.66 0 1.13.5 1.13 1.26v9.67c0 .75-.47 1.26-1.13 1.26-.66 0-1.13-.5-1.13-1.26v-9.67zM180.97 16.32h-.5c-.61 0-.99-.38-.99-.99 0-.56.42-.99.99-.99h.5v-1.35c0-.75.47-1.26 1.13-1.26.66 0 1.13.5 1.13 1.26v1.35h.64c.58 0 1.08.27 1.08.99 0 .71-.5.99-1.08.99h-.64v5.21c0 .75-.47 1.26-1.13 1.26-.66 0-1.13-.5-1.13-1.26v-5.21zM185.31 11.86c0-.75.47-1.26 1.13-1.26.66 0 1.13.5 1.13 1.26v3.08h.03c.47-.58 1.35-.79 2.06-.79 1.77 0 3.09 1.13 3.09 3.05v4.33c0 .75-.47 1.26-1.13 1.26-.66 0-1.13-.5-1.13-1.26v-3.94c0-1.05-.66-1.55-1.48-1.55-.93 0-1.44.68-1.44 1.55v3.94c0 .75-.47 1.26-1.13 1.26-.66 0-1.13-.5-1.13-1.26v-9.67zM196.4 12.36c0 1.01-.79 1.8-1.82 1.8-1.02 0-1.83-.79-1.83-1.8 0-.98.81-1.77 1.83-1.77 1.03-.01 1.82.78 1.82 1.77zm-3.19 0c0 .79.58 1.42 1.38 1.42.78 0 1.35-.63 1.35-1.41 0-.79-.57-1.43-1.36-1.43-.78 0-1.37.64-1.37 1.42zm1.09.93h-.41v-1.77c.16-.03.39-.05.68-.05.34 0 .49.05.62.13.1.08.17.22.17.39 0 .19-.15.35-.37.41v.02c.17.06.27.19.32.43.05.27.09.38.13.44H195c-.05-.06-.09-.23-.14-.43-.03-.19-.14-.28-.37-.28h-.19v.71zm.01-1.01h.19c.23 0 .41-.08.41-.26 0-.16-.12-.27-.38-.27-.11 0-.18.01-.23.02v.51z"></path>
          </svg>
        </div>
        <div className="header-links flex items-center pr-20">
          <ul className="list-none">
            <li className="inline-block mr-5">
              <a href="#">Admin</a>
            </li>
            <li className="inline-block">
              <a href="#">Manage Company</a>
            </li>
          </ul>
        </div>
      </header>
  );
}
