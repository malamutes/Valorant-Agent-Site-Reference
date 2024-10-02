export interface Ability {
    AbilityIcon: string
    AbilityName: string,
    AbilityUrl: string,
    AbilityDescription: string
}

export interface AgentDescription {
    AgentName: string;
    AgentDescription: string;
    Role: string[]; // Role name and icon URL
    Abilities: Ability[]; // Array of abilities

}


/*const FruitDict: { [key: string]: Fruit } = {
    Apple: { color: "red", taste: "sweet" },
    Banana: { color: "yellow", taste: "sweet" },
    Lemon: { color: "yellow", taste: "sour" }
};  this is a godo simple example for whats done below*/

const AgentDescriptionDict: { [key: string]: AgentDescription } = {
    Brimstone: {
        AgentName: 'Brimstone',
        AgentDescription: `Joining from the U.S.A., Brimstone's orbital 
        arsenal ensures his squad always has the advantage. 
        His ability to deliver utility precisely and safely makes him the unmatched boots-on-the-ground commander.`,
        Role: ["Controller", "https://static.valorantstats.xyz/role-icons/controller-icon.png"],
        Abilities: [
            {
                AbilityIcon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/d7e00a4ad8a1a01b2edcb9fc1193d05e4e50248f-128x128.png?auto=format&fit=crop&q=80&h=64&w=64&crop=center",
                AbilityName: "INCENDIARY",
                AbilityUrl: `https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/9df59d490062acceb7c6ca32a3650b55718381f7.mp4`, // Replace with actual URL
                AbilityDescription: `EQUIP an incendiary grenade launcher. 
                FIRE to launch a grenade that detonates as it comes to a rest on the floor, 
                creating a lingering fire zone that damages players within the zone.`
            },
            {
                AbilityIcon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/5325b2340045a32d919d467ce3b09c3725de73ea-126x126.png?auto=format&fit=crop&q=80&h=64&w=64&crop=center",
                AbilityName: "SKY SMOKE",
                AbilityUrl: `https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/8e0b72295747346b60c354765944f5233fb208f2.mp4`, // Replace with actual URL
                AbilityDescription: `EQUIP a tactical map. 
                FIRE to set locations where Brimstone's smoke clouds will land. ALT FIRE to confirm, 
                launching long-lasting smoke clouds that block vision in the selected area.`
            },
            {
                AbilityIcon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/f6c1e1c587dbfe97a4185a47326ce45c42620583-128x128.png?auto=format&fit=crop&q=80&h=64&w=64&crop=center",
                AbilityName: "STIM BEACON",
                AbilityUrl: `https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/da2d65e4abc2129e284cf5248fd70925f093a0b3.mp4`, // Replace with actual URL
                AbilityDescription: `EQUIP a stim beacon. 
                FIRE to toss the stim beacon in front of Brimstone. Upon landing, 
                the stim beacon will create a field that grants players RapidFire.`
            },
            {
                AbilityIcon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/8cfa836d1d19356685e42c13054f9f5bc8e9e029-128x128.png?auto=format&fit=crop&q=80&h=64&w=64&crop=center",
                AbilityName: "ORBITAL STRIKE",
                AbilityUrl: `https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/ccd8e6c574b7017a2681e5d37c744f5a654327e3.mp4`, // Replace with actual URL
                AbilityDescription: `EQUIP a tactical map. 
                FIRE to launch a lingering orbital strike laser at the selected location, 
                dealing high damage-over-time to players caught in the selected area.`
            }
        ]
    },
    Phoenix: {
        AgentName: 'Phoenix',
        AgentDescription: `Hailing from the U.K., Phoenix's star power shines through in his fighting style, 
        igniting the battlefield with flash and flare. Whether he's got backup or not, he'll rush into a fight 
        on his own terms.`,
        Role: ["Duelist", "https://static.valorantstats.xyz/role-icons/duelist-icon.png"],
        Abilities: [
            {
                AbilityIcon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/beb874d19c79982f0e99e858098c067d9132a95a-128x128.png?auto=format&fit=crop&q=80&h=64&w=64&crop=center",
                AbilityName: "CURVEBALL",
                AbilityUrl: `https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/c62AbilityIcon: "",25bAbilityIcon: "",b5637b7b0e088AbilityIcon: "",348502f7e8b8e93572.mp4`,
                AbilityDescription: `EQUIP a flare orb that takes a curving path and detonates shortly after throwing. 
                FIRE to curve the flare orb to the left, detonating and blinding any player who sees the orb. 
                ALTERNATE FIRE to curve the flare orb to the right.`
            },
            {
                AbilityIcon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/67df9ca3cb158a945fc9b13eb0e3949683c4c65d-128x128.png?auto=format&fit=crop&q=80&h=64&w=64&crop=center",
                AbilityName: "HOT HANDS",
                AbilityUrl: `https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/b702ed368fd050e7cb77adf26bc55bb63c5936fb.mp4`,
                AbilityDescription: `EQUIP a fireball. FIRE to throw a fireball that explodes after a set amount of time 
                or upon hitting the ground, creating a lingering fire zone that damages enemies.`
            },
            {
                AbilityIcon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/d807a982ce70475acb2e8461b4f8737204e35d96-128x128.png?auto=format&fit=crop&q=80&h=64&w=64&crop=center",
                AbilityName: "BLAZE",
                AbilityUrl: `https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/8c5b0e23be08AbilityIcon: "",4583ad460AbilityIcon: "",b4297d04dbaff79f7.mp4`,
                AbilityDescription: `EQUIP a flame wall. FIRE to create a line of flame that moves forward, 
                creating a wall of fire that blocks vision and damages players passing through it. 
                HOLD FIRE to bend the wall in the direction of your crosshair.`
            },
            {
                AbilityIcon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/d428c0c6c73ba34676e063092a7ae7157268db0c-128x128.png?auto=format&fit=crop&q=80&h=64&w=64&crop=center",
                AbilityName: "RUN IT BACK",
                AbilityUrl: `https://example.com/run_it_back.mp4`, // Placeholder for actual URL
                AbilityDescription: `INSTANTLY place a marker at Phoenix’s location. While this ability is active, 
                dying or allowing the timer to expire will end this ability and bring Phoenix back to this location 
                with full health.`
            }
        ]
    },
    Sage: {
        AgentName: 'Sage',
        AgentDescription: `The stronghold of China, Sage creates safety for herself and her team wherever she goes. 
        Able to revive fallen friends and stave off aggressive pushes, she provides a calm center to a hellish fight.`,
        Role: ["Sentinel", "https://static.valorantstats.xyz/role-icons/sentinel-icon.png"],
        Abilities: [
            {
                AbilityIcon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/f2931e5af58255216179b21cce81f53eab15d6ee-128x128.png?auto=format&fit=crop&q=80&h=64&w=64&crop=center",
                AbilityName: "SLOW ORB",
                AbilityUrl: `https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/45053483528b96cbe003ac39e6b53c9866d5fea6.mp4`,
                AbilityDescription: `EQUIP a slowing orb. FIRE to throw a slowing orb forward that detonates upon landing, 
                creating a lingering field that slows players caught inside of it.`
            },
            {
                AbilityIcon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/cdc246179e160ded2788fd37ac21f10bc040ad54-128x128.png?auto=format&fit=crop&q=80&h=64&w=64&crop=center",
                AbilityName: "HEALING ORB",
                AbilityUrl: `https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/a247dAbilityIcon: "",96383AbilityIcon: "",36d3deAbilityIcon: "",5b4d6d9c816e3c8054ba0.mp4`,
                AbilityDescription: `EQUIP a healing orb. FIRE with your crosshairs over a damaged ally to activate a heal-over-time 
                on them. ALT FIRE while Sage is damaged to activate a self heal-over-time.`
            },
            {
                AbilityIcon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/829075fef7193503dd480947b79d78193d729d42-128x128.png?auto=format&fit=crop&q=80&h=64&w=64&crop=center",
                AbilityName: "BARRIER ORB",
                AbilityUrl: `https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/a79bAbilityIcon: "",d6838cee5572b428babd74a2db0c07f4ea5.mp4`,
                AbilityDescription: `EQUIP a barrier orb. FIRE places a solid wall. 
                ALT FIRE rotates the targeter.`
            },
            {
                AbilityIcon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/90b6e1ca1a3ecd68e2a3072515d071f80bf46c1d-128x128.png?auto=format&fit=crop&q=80&h=64&w=64&crop=center",
                AbilityName: "RESURRECTION",
                AbilityUrl: `https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/df83929ed5da349c37a5bf4600c2b550AbilityIcon: "",0c72402.mp4`,
                AbilityDescription: `EQUIP a resurrection ability. FIRE with your crosshairs placed over a dead ally to begin 
                resurrecting them. After a brief channel, the ally will be brought back to life with full health.`
            }
        ]
    },
    Sova: {
        AgentName: 'Sova',
        AgentDescription: `Born from the eternal winter of Russia's tundra, Sova tracks, finds, and eliminates enemies 
        with ruthless efficiency and precision. His custom bow and incredible scouting abilities ensure that even if you run, 
        you cannot hide.`,
        Role: ["Initiator", "https://static.valorantstats.xyz/role-icons/initiator-icon.png"],
        Abilities: [
            {
                AbilityIcon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/8ab5a2d03438ff0f8b2ba2d7b26c812ab6b7adbb-128x128.png?auto=format&fit=crop&q=80&h=64&w=64&crop=center",
                AbilityName: "SHOCK BOLT",
                AbilityUrl: `https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/7776fa677e90c72da94ec7dAbilityIcon: "",88d2d46AbilityIcon: "",8AbilityIcon: "",6c4AbilityIcon: "",b.mp4`,
                AbilityDescription: `EQUIP a bow with a shock bolt. FIRE to send the explosive bolt forward, detonating upon collision 
                and damaging players nearby. HOLD FIRE to extend the range of the projectile. ALT FIRE to add up to two bounces to this arrow.`
            },
            {
                AbilityIcon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/b428e1783f98a0990b86d13872f564095442f44b-128x128.png?auto=format&fit=crop&q=80&h=64&w=64&crop=center",
                AbilityName: "RECON BOLT",
                AbilityUrl: `https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/50f9d870fa2a9b9ba38408eb7AbilityIcon: "",8ffc06879cAbilityIcon: "",a8.mp4`,
                AbilityDescription: `EQUIP a bow with recon bolt. FIRE to send the recon bolt forward, activating upon collision 
                and revealing the location of nearby enemies caught in the line of sight of the bolt. Enemies can destroy this bolt. 
                HOLD FIRE to extend the range of the projectile. ALT FIRE to add up to two bounces to this arrow.`
            },
            {
                AbilityIcon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/07877d7c79546ef64338eae550ffa5649f3582b0-128x128.png?auto=format&fit=crop&q=80&h=64&w=64&crop=center",
                AbilityName: "OWL DRONE",
                AbilityUrl: `https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/6c6f036376cAbilityIcon: "",8ddf4ed0c589b506b8889d86a29a.mp4`,
                AbilityDescription: `EQUIP an owl drone. FIRE to deploy and take control of movement of the drone. While in control of 
                the drone, FIRE to shoot a marking dart. This dart will reveal the location of any player struck by the dart. 
                Enemies can destroy the Owl Drone.`
            },
            {
                AbilityIcon: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/7b9f078b0576e87e74b8175b0d33ac682b7a8ab3-128x128.png?auto=format&fit=crop&q=80&h=64&w=64&crop=center",
                AbilityName: "HUNTER'S FURY",
                AbilityUrl: `https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/df9ce34c3d2a7f527929cacAbilityIcon: "",2350AbilityIcon: "",eAbilityIcon: "",473e0da0e.mp4`,
                AbilityDescription: `EQUIP a bow with three long-range wall-piercing energy blasts. FIRE to release an energy blast 
                in a line in front of Sova, dealing damage and revealing the location of enemies caught in the line. This ability 
                can be RE-USED up to two more times while the ability timer is active.`
            }
        ]
    }
};

//https://static.valorantstats.xyz/role-icons/controller-icon.png
//https://static.valorantstats.xyz/role-icons/sentinel-icon.png
//https://static.valorantstats.xyz/role-icons/duelist-icon.png
//https://static.valorantstats.xyz/role-icons/initiator-icon.png


export { AgentDescriptionDict };

