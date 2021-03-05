export default function UserList($parent, users) {

    this.init = () => {
        this.render()
    };

    this.render = () => {
        users.map(this.createUserButtonTemplate).forEach( $button => {
            $parent.appendChild($button)});
        
        // $parent.innerHTML = `
        //     <button class="ripple active">eastjun</button>
        //     <button class="ripple">westjun</button>
        //     <button class="ripple">southjun</button>
        //     <button class="ripple">northjun</button>
        //     <button class="ripple">hojun</button>
        //     <button class="ripple user-create-button">+ 유저 생성</button>
        // `;
    };
    
    this.createUserButtonTemplate = ({name}) => {
        const $button = document.createElement('button');
        $button.innerText = name;
        $button.classList.add('ripple');
        return $button;
    };

    this.init();

    return this;
}