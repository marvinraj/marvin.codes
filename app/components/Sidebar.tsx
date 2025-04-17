// logo + social media icons

function Sidebar() {
  return (
    <> 
        <div>
            {/* top side -> vertical line + logo */}
            <div>
                <a href="#" className="font-belleza text-2xl">M</a>
            </div>
            {/* bottom side -> social media icons */}
            <ul className="text-xs font-inter">
              <li><a href="#">linkedin</a></li>
              <li><a href="#">github</a></li>
              <li><a href="#">medium</a></li>
            </ul>
        </div>
    </>
  )
}

export default Sidebar