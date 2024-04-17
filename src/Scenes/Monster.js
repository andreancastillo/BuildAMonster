class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;

        this.armRightX = 380;
        this.armRightY = 435;
        this.armLeftX = 230;
        this.armLeftY = 435;
        //this.armLeft2X = 220;
        //this.armLeft2Y = 400;

        this.legRightX = 340;
        this.legRightY = 460;
        this.legLeftX = 260;
        this.legLeftY = 460;  

        this.eye1X = 300;
        this.eye1Y = 350;

        this.eyelash1X = 285;
        this.eyelash1Y = 330;
        this.eyelash2X = 315;
        this.eyelash2Y = 330;

        this.mouthClosedX = 300;
        this.mouthClosedY = 410;
        this.mouthSmileX = 300;
        this.mouthSmileY = 410;
        this.mouthFangX = 300;
        this.mouthFangY = 410;

        this.eyebrow1X = 325;
        this.eyebrow1Y = 300;
    
        this.eyebrow2X = 275;
        this.eyebrow2Y = 300;

        this.hornRightX = 355;
        this.hornRightY = 280;
        this.hornLeftX = 245;
        this.hornLeftY = 280;
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.legRight = this.add.sprite(this.legRightX, this.legRightY, "monsterParts", "leg_redC.png");
        my.sprite.legLeft = this.add.sprite(this.legLeftX, this.legLeftY, "monsterParts", "leg_whiteC.png");
        my.sprite.legLeft.flipX = true

        my.sprite.armRight = this.add.sprite(this.armRightX, this.armRightY, "monsterParts", "arm_yellowE.png");
        my.sprite.armLeft = this.add.sprite(this.armLeftX, this.armLeftY, "monsterParts", "arm_greenA.png");
        my.sprite.armLeft.flipX = true
        //my.sprite.armLeft2 = this.add.sprite(this.armLeft2X, this.armLeft2Y, "monsterParts", "arm_yellowA.png");
        //my.sprite.armLeft2.flipX = true

        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_blueD.png");

        my.sprite.eyelash1 = this.add.sprite(this.eyelash1X, this.eyelash1Y, "monsterParts", "eye_closed_feminine.png");
        my.sprite.eyelash1.flipX = true
        my.sprite.eyelash2 = this.add.sprite(this.eyelash2X, this.eyelash2Y, "monsterParts", "eye_closed_feminine.png");
        my.sprite.eye1 = this.add.sprite(this.eye1X, this.eye1Y, "monsterParts", "eye_cute_light.png");
       
        my.sprite.mouthClosed = this.add.sprite(this.mouthClosedX, this.mouthClosedY, "monsterParts", "mouth_closed_sad.png");
        my.sprite.mouthClosed.visible = true;

        my.sprite.mouthSmile = this.add.sprite(this.mouthSmileX, this.mouthSmileY, "monsterParts", "mouthI.png");
        my.sprite.mouthSmile.visible = false;

        my.sprite.mouthFang = this.add.sprite(this.mouthFangX, this.mouthFangY, "monsterParts", "mouthF.png");
        my.sprite.mouthFang.visible = false;

        my.sprite.hornRight = this.add.sprite(this.hornRightX, this.hornRightY, "monsterParts", "detail_white_horn_large.png");
        my.sprite.hornLeft = this.add.sprite(this.hornLeftX, this.hornLeftY, "monsterParts", "detail_red_horn_large.png");
        my.sprite.hornLeft.flipX = true

        my.sprite.eyebrow1 = this.add.sprite(this.eyebrow1X, this.eyebrow1Y, "monsterParts", "eyebrowA.png");
        my.sprite.eyebrow2 = this.add.sprite(this.eyebrow2X, this.eyebrow2Y, "monsterParts", "eyebrowA.png");
        my.sprite.eyebrow2.flipX = true
    }

    update() {

        let my = this.my;    // create an alias to this.my for readability
        let keyA;
        let keyD;
        let keyS;
        let keyF;

        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);

        if (keyA.isDown) {
            console.log("monster moves left");
            my.sprite.body.x--;
            my.sprite.legRight.x--;
            my.sprite.legLeft.x--;
            my.sprite.armRight.x--;
            my.sprite.armLeft.x--;
            my.sprite.eyelash1.x--;
            my.sprite.eyelash2.x--;
            my.sprite.eye1.x--;
            my.sprite.mouthClosed.x--;
            my.sprite.mouthSmile.x--;
            my.sprite.mouthFang.x--;
            my.sprite.hornRight.x--;
            my.sprite.hornLeft.x--;
            my.sprite.eyebrow1.x--;
            my.sprite.eyebrow2.x--;
        } 
        if (keyD.isDown) {
            console.log("monster moves right");
            my.sprite.body.x++;
            my.sprite.legRight.x++;
            my.sprite.legLeft.x++;
            my.sprite.armRight.x++;
            my.sprite.armLeft.x++;
            my.sprite.eyelash1.x++;
            my.sprite.eyelash2.x++;
            my.sprite.eye1.x++;
            my.sprite.mouthClosed.x++;
            my.sprite.mouthSmile.x++;
            my.sprite.mouthFang.x++;
            my.sprite.hornRight.x++;
            my.sprite.hornLeft.x++;
            my.sprite.eyebrow1.x++;
            my.sprite.eyebrow2.x++;
        } 
        if (keyS.isDown) {
            console.log("monster should smile");
            my.sprite.mouthSmile.visible = true;
            my.sprite.mouthClosed.visible = false;
            my.sprite.mouthFang.visible = false;
        } else if (keyF.isDown) {
            console.log("monster should show fangs");
            my.sprite.mouthFang.visible = true;
            my.sprite.mouthClosed.visible = false;
            my.sprite.mouthSmile.visible = false
        } else {
            my.sprite.mouthSmile.visible = false
            my.sprite.mouthFang.visible = false;
            my.sprite.mouthClosed.visible = true;
        } 

        /*
         this.input.keyboard.on("keydown", function (event) {
            console.log(event.code);
            if (event.code === "KeyA") {
                console.log("monster moves left");
            }

            if (event.code === "KeyD") {
                console.log("monster moves right");
            }

            if (event.code === "KeyS") {
                console.log("monster should smile");
                my.sprite.mouthSmile.visible = true;
                my.sprite.mouthClosed.visible = false;
            } else {
                my.sprite.mouthSmile.visible = false;
                my.sprite.mouthClosed.visible = true;
            }

            if (event.code === "KeyF") {
                console.log("monster should show fangs");
            }

        });
        */
    }

}