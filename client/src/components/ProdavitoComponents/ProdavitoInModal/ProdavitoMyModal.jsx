import cl from "./style.module.css";

const ProdavitoMyModal = ({ children, visible, setVisible }) => {
  const rootClasses = [cl.myModal];
  if (visible) {
    rootClasses.push(cl.active);
  }

  return (
  
    <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
      <div className={cl.myModalContent} onClick={(e) => e.stopPropagation()}>
        <div className={cl.topmodal}></div>
        <div className={cl.inModal}>{children}</div>
      </div>
    </div>
  );
};

export default ProdavitoMyModal;
