const ProfileField = ({ keyText, valueText }) => {
  return (
    <div className="w-full flex gap-2 justify-between">
      <div className="w-1/2 opacity-60 break-words">{keyText} </div>
      <div className="w-1/2 flex">
        <p className="break-words">{valueText}</p>{' '}
      </div>
    </div>
  );
};

export default ProfileField;
