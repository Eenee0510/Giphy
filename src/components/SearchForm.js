
import { useState} from "react";

function SearchForm(props) {
  const [searchText, setSearchText] = useState("")
  const onSearchChange = (e) => {
   
    setSearchText(e.target.value)
  }
  const handleSubmit = (e) => {
    console.log(e)
    e.preventDefault();
    props.onSearch(searchText)
  
    e.currentTarget.reset()
  }

  return (
      <div>
            <form className="search-form" onSubmit={handleSubmit}>
              <label className="is-hidden" htmlFor="search">
                 Search
             </label>
            <input type="search" 
                   name ="search"
                placeholder="Search...."
                onChange={onSearchChange}>
             </input>
           <button type="submit"
                     id="submit"
                     className="search-button" />
            <i className="material-icons icn-button" />
          </form>
       </div>
       );
}
// export default class SearchForm extends Component {
//   state = {
//     searchText: "",
//   }
//   onSearchChange = (e) => {
   
  
//     this.setState({searchText: e.target.value});
//   }
//   handleSubmit = (e) => {
//     console.log(e)
//     e.preventDefault();
//     this.props.onSearch(this.state.searchText)
  
//     e.currentTarget.reset()
//   }
//   render() {
//     return (
//       <div>
//         <form className="search-form" onSubmit={this.handleSubmit}>
//           <label className="is-hidden" htmlFor="search">
//             Search
//           </label>
//           <input type="search" 
//                   name ="search"
//                 placeholder="Search...."
//                 onChange={this.onSearchChange}>
//             </input>
//           <button type="submit"
//                   id="submit"
//                   className="search-button" />
//             <i className="material-icons icn-button" />
//         </form>
//       </div>
//     );
//   }
// }
export default SearchForm;