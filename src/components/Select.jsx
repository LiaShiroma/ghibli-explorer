function Select({ label, icon, value, options, onChange }) {
  return (
    <div className="w-full">
      <label
        htmlFor="director"
        className="block text-xs tracking-widest font-bold text-green opacity-50 uppercase font-[Nunito] mb-2"
      >
        {label}
      </label>

      <div className="flex items-center bg-bg/50 rounded-xl p-4 border border-light/80">
        <select
          id="director"
          name="director"
          className="w-full text-sm font-[Nunito] font-bold text-darkGreen focus:outline-none appearance-none"
          value={value}
          onChange={(event) => onChange(event.target.value)}
        >
          {options.map((option) => (
            <option value={option.value} key={option.value}>{option.label}</option>
          ))}
        </select>

        {icon}
      </div>
    </div>
  );
}

export default Select;
