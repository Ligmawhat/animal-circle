import './style.css'
const ProdavitoInModal = ({el}) => {
    return (
      <div class="card-container">
        <div class="card u-clearfix">
          <div class="card-body">
            <span class="card-author subtle">{el?.title}</span>
            <h2 class="card-title">{el?.price}</h2>
            <span class="card-description subtle">{el?.description}</span>
          </div>
          <img src={`http://localhost:3001/items/${el?.url}`} />
        </div>
        <div class="card-shadow"></div>
      </div>
    );
};

export default ProdavitoInModal;
