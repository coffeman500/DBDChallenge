const Perks = {
    "Ace_In_The_Hole": {
        "categories": [
            "support"
        ],
        "name": "Ace in the Hole",
        "description": "Lady Luck always seems to be throwing something good your way.<br><br>When retrieving an item from a chest, there is a {0}% chance that a Very Rare (or lower) add-on will be attached to it.<br><br>{1}% chance of finding an add-on of Uncommon rarity (or lower).<br><br>When escaping, keep any add-ons your item has.",
        "role": "survivor",
        "character": 6,
        "tunables": [
            [
                "100"
            ],
            [
                "10",
                "25",
                "50"
            ]
        ],
        "modifier": "AceInTheHole",
        "teachable": 40,
        "image": "perks/iconPerks_AceInTheHole.png"
    },
    "Adrenaline": {
        "categories": [
            "navigation",
            "adaptation"
        ],
        "name": "Adrenaline",
        "description": "You are fuelled by unexpected energy when on the verge of escape.<br><br>Instantly heal one <b>health state</b> and sprint at {0}% of your normal running speed for {1} seconds when the exit gates are powered. Adrenaline is on hold if you are disabled at the moment it should take effect and will activate when freed.<br><br><i>Adrenaline</i> will <b>wake you up</b> if you are asleep when it triggers.<br><br><i>Adrenaline</i> ignores the <b>Exhausted</b> status effect.<br><br>Causes the <b>Exhausted</b> status effect for {2} seconds.<br><br>Exhausted prevents Survivors from activating exhausting perks.",
        "role": "survivor",
        "character": 1,
        "tunables": [
            [
                "150"
            ],
            [
                "5"
            ],
            [
                "60",
                "50",
                "40"
            ]
        ],
        "modifier": "Adrenaline",
        "teachable": 40,
        "image": "perks/iconPerks_Adrenaline.png"
    },
    "Aftercare": {
        "categories": [
            "perception"
        ],
        "name": "Aftercare",
        "description": "Unlocks potential in one's aura reading ability.<br><br>You see the aura of every Survivor that:<br><br><li>You rescue from a hook, or rescues you from a hook;</li><li>You complete a healing action on, or completes a healing action on you.</li><br><br>They also see your aura.<br><br>This occurs for up to {0} Survivors. All effects of <i>Aftercare</i> are reset when you are hooked by The Killer.",
        "role": "survivor",
        "character": 14,
        "tunables": [
            [
                "1",
                "2",
                "3"
            ],
            [
                "1",
                "2",
                "3"
            ]
        ],
        "modifier": "AfterCare",
        "teachable": 35,
        "image": "perks/iconPerks_Aftercare.png"
    },
    "Alert": {
        "categories": [
            "perception"
        ],
        "name": "Alert",
        "description": "Your acute senses are on high alert.<br><br>When the Killer performs a break action, the Killer is revealed to you for {0} seconds.",
        "role": "survivor",
        "character": 8,
        "tunables": [
            [
                "3",
                "4",
                "5"
            ]
        ],
        "modifier": "BP_Alert",
        "teachable": 40,
        "image": "perks/iconPerks_Alert.png"
    },
    "AnyMeansNecessary": {
        "categories": [
            "adaptation"
        ],
        "name": "Any Means Necessary",
        "description": "You stand up for yourself, using whatever\u2019s on hand to gain an advantage.<br><br>You see the auras of dropped Pallets.<li>Press and hold the <i>Active Ability Button 1</i> for {0} seconds while standing beside a dropped pallet to reset it to its upright position.</li>",
        "role": "survivor",
        "character": 19,
        "tunables": [
            [
                "6",
                "5",
                "4"
            ]
        ],
        "modifier": "BP_AnyMeansNecessary",
        "teachable": 35,
        "image": "perks/iconPerks_AnyMeansNecessary.png"
    },
    "Autodidact": {
        "categories": [
            "safeguard"
        ],
        "name": "Autodidact",
        "description": "You start the trial with a -{1}% progress penalty for Skill Checks to heal Survivors.<br><br>For every successful Skill Check while healing a Survivor, you receive a token up to a maximum of {0} tokens.<br><br>Each token grants you a +{2}% progress bonus.<br><br>Great Skill Checks cannot be performed while using <i>Autodidact</i>.<li><i>Autodidact</i> is not active when using a Med Kit to heal.</li>",
        "role": "survivor",
        "character": 13,
        "tunables": [
            [
                "3",
                "4",
                "5"
            ],
            [
                "25"
            ],
            [
                "15"
            ]
        ],
        "modifier": "Autodidact",
        "teachable": 40,
        "image": "perks/iconPerks_Autodidact.png"
    },
    "Babysitter": {
        "categories": [
            "safeguard",
            "concealment"
        ],
        "name": "Guardian",
        "description": "While you have a reputation for being self-centered, you risk it all to help those in need.<br><br>When you unhook a Survivor, they won\u2019t leave scratch marks or pools of blood, and they gain a {0}% <b>Haste</b> status effect for {1} seconds.<br><br>You see the Killer's aura for {2} seconds.<br><br>Haste increases Survivor movement speed.",
        "role": "survivor",
        "character": 18,
        "tunables": [
            [
                "7"
            ],
            [
                "4",
                "6",
                "8"
            ],
            [
                "8"
            ]
        ],
        "modifier": "BP_Babysitter",
        "teachable": 0,
        "image": "perks/iconPerks_babySitter.png"
    },
    "Balanced_Landing": {
        "categories": [
            "navigation"
        ],
        "name": "Balanced Landing",
        "description": "Your agility is incomparable.<br><br>After falling from a height, cat-like reflexes reduce your stagger duration from falling by {0}% and reduce the volume of grunts from falling by 100%. You start sprinting at {1}% your normal running speed for a maximum of {2} seconds.<br><br>Causes the <b>Exhausted</b> status effect for {3} seconds.<br><br><i>Balanced Landing</i> cannot be used while <b>Exhausted</b>.<br><br>Exhausted prevents Survivors from activating exhausting perks.",
        "role": "survivor",
        "character": 4,
        "tunables": [
            [
                "75"
            ],
            [
                "150"
            ],
            [
                "3"
            ],
            [
                "60",
                "50",
                "40"
            ]
        ],
        "modifier": "BP_BalancedLanding",
        "teachable": 30,
        "image": "perks/iconPerks_BalancedLanding.png"
    },
    "BetterTogether": {
        "categories": [
            "perception"
        ],
        "name": "Situational Awareness",
        "description": "You seek justice and uncover the truth no matter what obstacle stands in your way.<br><br>The aura of the generator you are currently repairing is revealed to all other Survivors located within {0} meters.<br><br>If The Killer downs a Survivor while you are repairing a generator, you see the aura of all other Survivors for {1} seconds.",
        "role": "survivor",
        "character": 17,
        "tunables": [
            [
                "32"
            ],
            [
                "8",
                "9",
                "10"
            ]
        ],
        "modifier": "BP_BetterTogether",
        "teachable": 0,
        "image": "perks/iconPerks_betterTogether.png"
    },
    "BloodPact": {
        "categories": [
            "perception",
            "support"
        ],
        "name": "Blood Pact",
        "description": "It\u2019s as if a latent part of yourself has awakened. You feel like you can reach out beyond yourself for assistance.<br><br>When you or the Obsession are injured, you both see each other's auras.<br><br>After completing a healing action on the Obsession, or having the Obsession complete a healing action on you, you both gain a {1}% <b>Haste</b> status effect until no longer within 16 meters of each other.<br><br>Reduces the odds of being the Obsession.<br><br>If you are the Obsession, this perk deactivates.<br><br><i>The Killer can only be obsessed with one Survivor at a time.</i><br><br>Haste increases Survivor movement speed.",
        "role": "survivor",
        "character": 21,
        "tunables": [
            [
                "6",
                "8",
                "10"
            ],
            [
                "5",
                "6",
                "7"
            ]
        ],
        "modifier": "BloodPact",
        "teachable": 35,
        "image": "perks/iconPerks_BloodPact.png"
    },
    "BoilOver": {
        "categories": [
            "adaptation"
        ],
        "name": "Boil Over",
        "description": "You are a battler and do everything to escape a foe's grasp. Your struggling effects on The Killer are increased by {0}%.<br><br>You obscure The Killer's ability to see hook auras within {1} meters.<br><br>You gain {2} % of current wiggling progress when the Killer drops from great heights.",
        "role": "survivor",
        "character": 10,
        "tunables": [
            [
                "60",
                "70",
                "80"
            ],
            [
                "16"
            ],
            [
                "33"
            ]
        ],
        "modifier": "BoilOver",
        "teachable": 40,
        "image": "perks/iconPerks_BoilOver.png"
    },
    "Bond": {
        "categories": [
            "perception"
        ],
        "name": "Bond",
        "description": "Unlocks potential in one's aura reading ability. Allies' auras are revealed to you when they are within a {0} meter range.",
        "role": "survivor",
        "character": 0,
        "tunables": [
            [
                "20",
                "28",
                "36"
            ]
        ],
        "modifier": "Bond",
        "teachable": 30,
        "image": "perks/iconPerks_Bond.png"
    },
    "BorrowedTime": {
        "categories": [
            "safeguard"
        ],
        "name": "Borrowed Time",
        "description": "You are fueled by unexpected energy when saving an ally from a hook.<br><br>Survivors you unhook:<br><br><li>Keep their <b>Endurance</b> status effect for an extra {0} seconds.</li><li>Keep their movement speed bonus for an extra 10 seconds.</li><br><br>Endurance prevents a Survivor from being downed, inflicting Deep Wound instead.<br><br>Deep Wound will put a Survivor in the dying state unless it is mended before the timer runs out.",
        "role": "survivor",
        "character": 7,
        "tunables": [
            [
                "6",
                "8",
                "10"
            ]
        ],
        "modifier": "BorrowedTime",
        "teachable": 35,
        "image": "perks/iconPerks_BorrowedTime.png"
    },
    "Botany_Knowledge": {
        "categories": [
            "safeguard"
        ],
        "name": "Botany Knowledge",
        "description": "You transform plants found around the campfire into tinctures that slow down bleeding.<br><br><li><b>Healing speed</b> is increased by {0}%.</li><li><b>Healing item efficiency</b> is reduced by {1}%.</li>",
        "role": "survivor",
        "character": 2,
        "tunables": [
            [
                "30",
                "40",
                "50"
            ],
            [
                "20"
            ]
        ],
        "modifier": "BotanyKnowledge",
        "teachable": 35,
        "image": "perks/iconPerks_BotanyKnowledge.png"
    },
    "Breakdown": {
        "categories": [
            "adaptation"
        ],
        "name": "Breakdown",
        "description": "Any time you are removed from a hook (escaped or saved), the hook breaks and the Killer's aura is shown to you for {0} seconds. A hook broken by this perk takes 180 seconds to respawn.",
        "role": "survivor",
        "character": 14,
        "tunables": [
            [
                "4",
                "5",
                "6"
            ]
        ],
        "modifier": "Breakdown",
        "teachable": 30,
        "image": "perks/iconPerks_Breakdown.png"
    },
    "Breakout": {
        "categories": [
            "safeguard"
        ],
        "name": "Breakout",
        "description": "You kick into high gear when someone\u2019s in trouble, inspiring them to overcome any obstacle.<br><br>When within {0} meters of a carried Survivor, you gain the <b>Haste</b> status effect, moving at {1}% increased speed. The carried Survivor\u2019s wiggle speed is increased by {2}%.<br><br>Haste increases Survivor movement speed.",
        "role": "survivor",
        "character": 19,
        "tunables": [
            [
                "5"
            ],
            [
                "5",
                "6",
                "7"
            ],
            [
                "25"
            ]
        ],
        "modifier": "BP_Breakout",
        "teachable": 40,
        "image": "perks/iconPerks_Breakout.png"
    },
    "BuckleUp": {
        "categories": [
            "perception"
        ],
        "name": "Buckle Up",
        "description": "Unlocks potential in one's aura reading ability. While healing a Survivor in the dying state, you both can see the Killer's aura. When completing healing a Survivor from the dying state to injured, both you and the healed Survivor gain <b>Endurance</b> for {0} seconds.<br><br><b>Endurance</b> prevents a Survivor from being downed, inflicting <b>Deep Wound</b> instead.<br><br><b>Deep Wound</b> will put a Survivor in the dying state unless it is mended before the timer runs out.",
        "role": "survivor",
        "character": 16,
        "tunables": [
            [
                "6",
                "8",
                "10"
            ]
        ],
        "modifier": "BuckleUp_BP",
        "teachable": 35,
        "image": "perks/iconPerks_BuckleUp.png"
    },
    "BuiltToLast": {
        "categories": [
            "adaptation"
        ],
        "name": "Built to Last",
        "description": "You know how to get the most out of your tools.<br><br>After hiding inside a locker for {0} seconds with a depleted item in hand, {1}% of its charges are refilled.<br><br>Each use of <i>Built to Last</i> reduces the amounts of charges refilled by {2}%.",
        "role": "survivor",
        "character": 22,
        "tunables": [
            [
                "14",
                "13",
                "12"
            ],
            [
                "99"
            ],
            [
                "33"
            ]
        ],
        "modifier": "BP_BuiltToLast",
        "teachable": 40,
        "image": "perks/iconPerks_BuiltToLast.png"
    },
    "Calm_Spirit": {
        "categories": [
            "concealment"
        ],
        "name": "Calm Spirit",
        "description": "Animals seem to trust you as they often stay calm in your presence.<br><br><li>Reduces chances of alerting woodland creatures by 100%.</li><li>Allows you to overcome the urge to scream.</li><li>Allows you to open chests and cleanse/bless Totems silently, but at {0}% reduced speed.</li>",
        "role": "survivor",
        "character": 3,
        "tunables": [
            [
                "40",
                "35",
                "30"
            ]
        ],
        "modifier": "CalmSpirit",
        "teachable": 35,
        "image": "perks/iconPerks_CalmSpirit.png"
    },
    "Camaraderie": {
        "categories": [
            "adaptation"
        ],
        "name": "Kinship",
        "description": "Life has taught you the importance of friendship which has given you strength.<br><br>While you are on the hook in the struggle phase, <i>Kinship</i> activates.<br><br>If another Survivor is within {0} meters of you while <i>Kinship</i> is activated, the hook timer is paused for {1} seconds.",
        "role": "survivor",
        "character": 18,
        "tunables": [
            [
                "16"
            ],
            [
                "26",
                "30",
                "34"
            ]
        ],
        "modifier": "BP_Camaraderie",
        "teachable": 0,
        "image": "perks/iconPerks_Camaraderie.png"
    },
    "Dance_with_me": {
        "categories": [
            "concealment"
        ],
        "name": "Dance With Me",
        "description": "When performing a fast vault or leaving a locker in a sprint, you leave no scratch marks for {0} seconds.<br><br><i>Dance With Me</i> has a cooldown of {1} seconds.",
        "role": "survivor",
        "character": 10,
        "tunables": [
            [
                "3"
            ],
            [
                "60",
                "50",
                "40"
            ]
        ],
        "modifier": "BP_DanceWithMe",
        "teachable": 30,
        "image": "perks/iconPerks_DanceWithMe.png"
    },
    "Dark_Sense": {
        "categories": [
            "perception"
        ],
        "name": "Dark Sense",
        "description": "Unlocks potential in one's aura reading ability.<br><br>Each time a generator is completed, <i>Dark Sense</i> activates.<br><br>While <i>Dark Sense</i> is active, the Killer entering a 24-meter radius around you reveals their aura for {0} seconds.<br><br>Once the aura's duration expires, <i>Dark Sense</i> deactivates.",
        "role": "survivor",
        "character": null,
        "tunables": [
            [
                "5",
                "7",
                "10"
            ]
        ],
        "modifier": "DarkSense_BP",
        "teachable": 0,
        "image": "perks/iconPerks_DarkSense.png"
    },
    "DeadHard": {
        "categories": [
            "navigation",
            "adaptation"
        ],
        "name": "Dead Hard",
        "description": "You can take a beating.<br><br>Dead hard activates after you are unhooked or unhook yourself.<br><br>When injured, tap into your adrenaline bank to avoid incoming damage. Press the <i>Active Ability Button 1</i> while running to gain the Endurance status effect for the next 0.5 seconds.<br><br><li>Causes the <i>Exhausted</i> status effect for {0} seconds.</li><li>Dead Hard then deactivates.</li><br><br>Endurance prevents a Survivor from being downed, inflicting Deep Wound instead.<br><br>Deep Wound will put a Survivor in the dying state unless it is mended before the timer runs out.<br><br>Exhausted prevents survivors from activating exhausting perks.",
        "role": "survivor",
        "character": 9,
        "tunables": [
            [
                "60",
                "50",
                "40"
            ]
        ],
        "modifier": "BP_DeadHard",
        "teachable": 35,
        "image": "perks/iconPerks_DeadHard.png"
    },
    "DecisiveStrike": {
        "categories": [
            "adaptation"
        ],
        "name": "Decisive Strike",
        "description": "Stab at your aggressor in an attempt to escape.<br><br>After being unhooked or unhooking yourself, <i>Decisive Strike</i> activates for {0} seconds.<br><br>While active, complete a Skill Check when grabbed by the Killer to escape, stunning them for 3 seconds.<li>Succeeding or failing the Skill Check disables <i>Decisive Strike</i>.</li><li>You become the Obsession after stunning the Killer.</li><li>The perk and its effects are disabled if the exit gates are powered.</li><br><br><i>Increases your chance to be the Obsession.</i><br><br>The Killer can only be obsessed with one Survivor at a time.<br><br>Taking any Conspicuous Action will deactivate <i>Decisive Strike</i>.",
        "role": "survivor",
        "character": 5,
        "tunables": [
            [
                "40",
                "50",
                "60"
            ]
        ],
        "modifier": "DecisiveStrike_BP",
        "teachable": 40,
        "image": "perks/iconPerks_DecisiveStrike.png"
    },
    "Deja_Vu": {
        "categories": [
            "perception"
        ],
        "name": "Deja Vu",
        "description": "The auras of <b>3 generators</b> which are in close proximity to one another are revealed to you.<br><br>Gain a {0}% repair speed bonus on the revealed generators.",
        "role": "survivor",
        "character": null,
        "tunables": [
            [
                "4",
                "5",
                "6"
            ]
        ],
        "modifier": "DejaVu",
        "teachable": 0,
        "image": "perks/iconPerks_DejaVu.png"
    },
    "Deliverance": {
        "categories": [
            "adaptation"
        ],
        "name": "Deliverance",
        "description": "After performing a safe hook rescue on another Survivor, <i>Deliverance</i> activates.<br><br>You now have a 100% chance of unhooking yourself during the escape attempt.<br><br>A successful <i>Deliverance</i> from the hook triggers the <b>Broken</b> status effect for {0} seconds.<br><br>Broken prevents Survivors from being healed.",
        "role": "survivor",
        "character": 13,
        "tunables": [
            [
                "100",
                "80",
                "60"
            ]
        ],
        "modifier": "BP_Deliverance",
        "teachable": 35,
        "image": "perks/iconPerks_Deliverance.png"
    },
    "DesperateMeasures": {
        "categories": [
            "safeguard"
        ],
        "name": "Desperate Measures",
        "description": "You refuse to fail, even during your darkest hour.<br><br>For each injured, hooked, or dying Survivor, increase the speed of your healing and unhook actions by {0}%.",
        "role": "survivor",
        "character": 22,
        "tunables": [
            [
                "10",
                "12",
                "14"
            ]
        ],
        "modifier": "BP_DesperateMeasures",
        "teachable": 35,
        "image": "perks/iconPerks_DesperateMeasures.png"
    },
    "DetectivesHunch": {
        "categories": [
            "perception"
        ],
        "name": "Detective's Hunch",
        "description": "Unlocks potential in one's aura reading ability. When a generator is completed, the auras of generators, chests and Totems within {0} meters are revealed to you for {1} seconds.<br><br>If you are holding a Map that can track objectives, generators, chests and Totems revealed by <i>Detective's Hunch</i> are added to the Map.",
        "role": "survivor",
        "character": 12,
        "tunables": [
            [
                "32",
                "48",
                "64"
            ],
            [
                "10"
            ]
        ],
        "modifier": "DetectivesHunch",
        "teachable": 35,
        "image": "perks/iconPerks_DetectivesHunch.png"
    },
    "Distortion": {
        "categories": [
            "concealment"
        ],
        "name": "Distortion",
        "description": "You start the Trial with {0} tokens.<br><br>When your aura would be shown to the killer, the perk activates and a token is consumed.<br><br>For the next {1} seconds, while the perk is activated, your aura and scratch marks will not be shown to The Killer.<br><br><li>This perk does not activate when you are in the dying state.</li><li>Regain a token for each 30 seconds spent inside the Killer's Terror Radius.</li><li><i>Distortion</i> may not have more than {0} tokens.</li>",
        "role": "survivor",
        "character": 14,
        "tunables": [
            [
                "3"
            ],
            [
                "6",
                "8",
                "10"
            ]
        ],
        "modifier": "Distortion",
        "teachable": 40,
        "image": "perks/iconPerks_Distortion.png"
    },
    "Diversion": {
        "categories": [
            "concealment"
        ],
        "name": "Diversion",
        "description": "Being within the Killer's Terror Radius while not in a chase for {0} seconds&nbsp;activates <i>Diversion</i>.<br><br><li>Once <i>Diversion</i> is activated, press the <i>Active Ability Button 1</i> while crouched and motionless to throw a pebble, which creates a distraction for The Killer at a distance of 20 meters.</li><br><br><li>The perk timer resets once the ability has been activated.</li><br><br>The distraction consists of:<br><br><li>A loud noise notification</li><li>Scratch marks</li>",
        "role": "survivor",
        "character": 13,
        "tunables": [
            [
                "40",
                "35",
                "30"
            ]
        ],
        "modifier": "BP_Diversion",
        "teachable": 30,
        "image": "perks/iconPerks_Diversion.png"
    },
    "Empathy": {
        "categories": [
            "perception"
        ],
        "name": "Empathy",
        "description": "Unlocks potential in one's aura reading ability. Dying or injured allies' auras are revealed to you when within a {0} meter range. Empathy does not reveal auras of allies when they are in direct contact with the Killer.",
        "role": "survivor",
        "character": 2,
        "tunables": [
            [
                "64",
                "96",
                "128"
            ]
        ],
        "modifier": "Empathy",
        "teachable": 30,
        "image": "perks/iconPerks_Empathy.png"
    },
    "Fixated": {
        "categories": [
            "navigation"
        ],
        "name": "Self-Aware",
        "description": "When you have a goal in mind, there\u2019s no turning back: better to ask forgiveness than permission.<br><br>You can see your own scratch marks at all times.<br><br>You walk {0}% faster.",
        "role": "survivor",
        "character": 17,
        "tunables": [
            [
                "10",
                "15",
                "20"
            ]
        ],
        "modifier": "BP_Fixated",
        "teachable": 0,
        "image": "perks/iconPerks_Fixated.png"
    },
    "FlipFlop": {
        "categories": [
            "adaptation"
        ],
        "name": "Flip-Flop",
        "description": "You have an uncanny ability to escape the inevitable.<br><br>While in dying state, {0}% of your recovery progression is converted into wiggle progression when you are picked up by The Killer, up to a maximum of {1}% total wiggle progression.",
        "role": "survivor",
        "character": 16,
        "tunables": [
            [
                "50"
            ],
            [
                "40",
                "45",
                "50"
            ]
        ],
        "modifier": "FlipFlop_BP",
        "teachable": 30,
        "image": "perks/iconPerks_FlipFlop.png"
    },
    "ForThePeople": {
        "categories": [
            "safeguard"
        ],
        "name": "For the People",
        "description": "You risk life and injury for others.<br><br><i>For the People</i> is only active while at full health.<br><br>Press the <i>Active Ability Button 1</i> while healing another Survivor without a Med-Kit to instantly heal them from dying to injured, or from injured to healthy.<br><br>You become injured and receive the <b>Broken</b> status effect for {0} seconds.<br><br>You become the Obsession.<br><br>Equipping this perk <b>decreases</b> your chances of being The Killer\u2019s Obsession at the start of the trial.<br><br><i>The Killer can only be <b>obsessed</b> with one Survivor at a time.</i><br><br>Broken prevents Survivors from being healed.",
        "role": "survivor",
        "character": 20,
        "tunables": [
            [
                "80",
                "70",
                "60"
            ]
        ],
        "modifier": "ForThePeople",
        "teachable": 40,
        "image": "perks/iconPerks_ForThePeople.png"
    },
    "HeadOn": {
        "categories": [
            "adaptation"
        ],
        "name": "Head On",
        "description": "When your mind is set, there better be no one standing in your way.<br><br>While standing in a locker, for {0} seconds, <i>Head On</i> activates.<br><br>While <i>Head On</i> is activated, perform a rush action to leave a locker to use <i>Head On</i>. If The Killer is standing within <i>Head On's</i> effective range, The Killer is stunned for {1} seconds.<br><br>Causes the Exhausted status effect for {2} seconds.<br><br><i>Head On</i> cannot be used while Exhausted.<br><br>You do not recover from the Exhausted status effect while running.<br><br><i>Head On</i> cannot be used when you have idle crows.<br><br>Exhausted prevents Survivors from activating exhausting perks.",
        "role": "survivor",
        "character": 15,
        "tunables": [
            [
                "3"
            ],
            [
                "3"
            ],
            [
                "60",
                "50",
                "40"
            ]
        ],
        "modifier": "HeadOn_BP",
        "teachable": 40,
        "image": "perks/iconPerks_HeadOn.png"
    },
    "Hope": {
        "categories": [
            "navigation"
        ],
        "name": "Hope",
        "description": "The growing odds of a successful escape fill you with hope and give you wings.<br><br>As soon as the exit gates are powered you gain a {0}% <b>Haste</b> status effect.<br><br>Haste increases Survivor movement speed.",
        "role": "survivor",
        "character": null,
        "tunables": [
            [
                "5",
                "6",
                "7"
            ],
            [
                "120"
            ]
        ],
        "modifier": "Hope",
        "teachable": 0,
        "image": "perks/iconPerks_Hope.png"
    },
    "InnerStrength": {
        "categories": [
            "adaptation"
        ],
        "name": "Inner Healing",
        "description": "You look inward and trust your instincts when you feel lost and alone.<br><br>Each time you complete a Totem cleanse action, <i>Inner Healing</i> activates. If you are already afflicted by the <b>Broken</b> status effect, <i>Inner Healing</i> does not activate.<br><br>While&nbsp;<i>Inner Healing</i> is active, hiding inside a locker for {0} seconds while injured automatically heals you from injured to healthy.<br><br><i>Inner Healing</i>&nbsp;becomes deactivated as soon as it has successfully triggered.",
        "role": "survivor",
        "character": 17,
        "tunables": [
            [
                "10",
                "9",
                "8"
            ]
        ],
        "modifier": "BP_InnerStrength",
        "teachable": 0,
        "image": "perks/iconPerks_innerStrength.png"
    },
    "Iron_Will": {
        "categories": [
            "concealment"
        ],
        "name": "Iron Will",
        "description": "You're able to concentrate and enter a meditative-like state to numb some pain. Grunts of pain caused by injuries are reduced by {0}%. Does not function while <b>Exhausted</b>. Does not inflict <b>Exhausted</b>.<br><br>Exhausted prevents Survivors from activating exhausting perks.",
        "role": "survivor",
        "character": 3,
        "tunables": [
            [
                "25",
                "50",
                "75"
            ]
        ],
        "modifier": "IronWill",
        "teachable": 30,
        "image": "perks/iconPerks_IronWill.png"
    },
    "Kindred": {
        "categories": [
            "perception"
        ],
        "name": "Kindred",
        "description": "Unlocks potential in one's aura reading ability. While you are on the hook, all Survivor's auras are revealed to all other Survivors. If The Killer is within a {0} meter range, The Killer's aura is revealed to all other Survivors.<br><br>While a Survivor other than you is on the hook, all other Survivors\u2019 auras are revealed to you. If The Killer is within a {0} meter range of the hooked Survivor, The Killer's aura is revealed to you.",
        "role": "survivor",
        "character": null,
        "tunables": [
            [
                "8",
                "12",
                "16"
            ]
        ],
        "modifier": "Kindred",
        "teachable": 0,
        "image": "perks/iconPerks_Kindred.png"
    },
    "Leader": {
        "categories": [
            "strategy",
            "support"
        ],
        "name": "Leader",
        "description": "You're able to organize a team to cooperate more efficiently. Increases other Survivors' healing, sabotage, unhooking, cleansing, opening exit gates, and chest unlocking speeds by {0}% when they are within a {1} meter range from you.<br><br>Survivors can only be affected by one Leader effect at a time.<br><br>This effect persists on other Survivors for {2} seconds after leaving the Leader's effective perk range.",
        "role": "survivor",
        "character": 0,
        "tunables": [
            [
                "15",
                "20",
                "25"
            ],
            [
                "8"
            ],
            [
                "15"
            ]
        ],
        "modifier": "Leader",
        "teachable": 40,
        "image": "perks/iconPerks_Leader.png"
    },
    "LeftBehind": {
        "categories": [
            "strategy",
            "adaptation"
        ],
        "name": "Left Behind",
        "description": "Unlocks potential in one's aura reading ability.<br><br>If you are the last Survivor remaining in the trial, you can see the aura of the Hatch within a {0} meter range.",
        "role": "survivor",
        "character": 7,
        "tunables": [
            [
                "24",
                "28",
                "32"
            ]
        ],
        "modifier": "LeftBehind",
        "teachable": 30,
        "image": "perks/iconPerks_LeftBehind.png"
    },
    "Lightweight": {
        "categories": [
            "navigation"
        ],
        "name": "Lightweight",
        "description": "Your running is light and soft, making your tracks harder to follow. Scratch marks stay visible {0} seconds less than normal, and their spacing is inconsistent.",
        "role": "survivor",
        "character": null,
        "tunables": [
            [
                "3",
                "4",
                "5"
            ]
        ],
        "modifier": "Lightweight",
        "teachable": 0,
        "image": "perks/iconPerks_Lightweight.png"
    },
    "Lithe": {
        "categories": [
            "navigation"
        ],
        "name": "Lithe",
        "description": "After performing a <b>rushed</b> vault, break into a sprint at {0}% of your normal running speed for a maximum of {1} seconds.<br><br>Causes the <b>Exhausted</b> status effect for {2} seconds.<br><br><i>Lithe</i> cannot be used while <b>Exhausted</b>.<br><br>Exhausted prevents Survivors from activating exhausting perks.",
        "role": "survivor",
        "character": 8,
        "tunables": [
            [
                "150"
            ],
            [
                "3"
            ],
            [
                "60",
                "50",
                "40"
            ]
        ],
        "modifier": "Lithe",
        "teachable": 35,
        "image": "perks/iconPerks_Lithe.png"
    },
    "LuckyBreak": {
        "categories": [
            "concealment"
        ],
        "name": "Lucky Break",
        "description": "You\u2019ve had your share of scrapes and bruises, but luck\u2019s always on your side.<br><br><i>Lucky Break</i> activates any time you are injured. While <i>Lucky Break</i> is active, you won\u2019t leave trails of blood or scratch marks for a total of {0} seconds.<br><br>For each 1 second spent healing another Survivor, increase <i>Lucky Break</i>'s duration by 1 second. <i>Lucky Break</i>'s duration cannot increase beyond its starting value.",
        "role": "survivor",
        "character": 19,
        "tunables": [
            [
                "40",
                "50",
                "60"
            ]
        ],
        "modifier": "BP_LuckyBreak",
        "teachable": 30,
        "image": "perks/iconPerks_LuckyBreak.png"
    },
    "NoMither": {
        "categories": [
            "adaptation",
            "concealment"
        ],
        "name": "No Mither",
        "description": "You are affected by the <b>Broken</b> status effect for the duration of the trial.<br><br>Your thick blood coagulates practically instantly.<li>You don't leave pools of blood.</li><li>Grunts of pain caused by injuries are reduced by {0}% at any time.</li><li>Your recovery speed is increased by {1}% and you can completely recover from the dying state.</li><br><br>Broken prevents Survivors from being healed.",
        "role": "survivor",
        "character": 9,
        "tunables": [
            [
                "25",
                "50",
                "75"
            ],
            [
                "15",
                "20",
                "25"
            ]
        ],
        "modifier": "NoMither",
        "teachable": 40,
        "image": "perks/iconPerks_NoMither.png"
    },
    "No_One_Left_Behind": {
        "categories": [
            "safeguard"
        ],
        "name": "No One Left Behind",
        "description": "It is inconceivable to leave someone behind. Once the exit gates are powered, you gain the following effects:<br><br><li>{0}%&nbsp;additional Bloodpoints for healing and unhooking other Survivors.</li><li>{1}%&nbsp;bonus action speed when healing and unhooking other Survivors.</li><li>When unhooking a Survivor, they gain a 7% movement bonus for 10 seconds.</li><li>The auras of all other Survivors are revealed to you.</li>",
        "role": "survivor",
        "character": null,
        "tunables": [
            [
                "50",
                "75",
                "100"
            ],
            [
                "30",
                "40",
                "50"
            ]
        ],
        "modifier": "BP_NoOneLeftBehind",
        "teachable": 0,
        "image": "perks/iconPerks_NoOneLeftBehind.png"
    },
    "ObjectOfObsession": {
        "categories": [
            "perception"
        ],
        "name": "Object of Obsession",
        "description": "A supernatural bond links you to the Killer.<br><br>Whenever your aura is revealed to the Killer, the Killer's aura becomes visible to you and you gain a {0}% bonus to healing, repairing and cleansing speed.<br><br>If you are the Obsession, your aura is revealed to the Killer for 3 seconds once every 30 seconds.<br><br>Increases your chances of being the Obsession.<br><br><i>The Killer can only be obsessed with one Survivor at a time.</i>",
        "role": "survivor",
        "character": 5,
        "tunables": [
            [
                "2",
                "4",
                "6"
            ]
        ],
        "modifier": "ObjectOfObsession",
        "teachable": 35,
        "image": "perks/iconPerks_objectOfObsession.png"
    },
    "OffTheRecord": {
        "categories": [
            "concealment"
        ],
        "name": "Off the Record",
        "description": "You\u2019ve learned that a quiet approach is sometimes best.<br><br>Once you are unhooked or escape from the hook, <i>Off the Record</i> activates for {0} seconds. This perk and its effects are disabled once the exit gates are powered.<br><br>While <i>Off the Record</i> is active:<li>Your aura will not be shown to The Killer.</li><li>Grunts of pain caused by injuries are reduced by 100%.</li><li>Gain the <b>Endurance</b> status effect.</li><br><br>Endurance prevents a survivor from being downed, inflicting Deep Wound instead.<br><br>Deep Wound will put a Survivor in the dying state unless it is mended before the timer runs out.",
        "role": "survivor",
        "character": 20,
        "tunables": [
            [
                "60",
                "70",
                "80"
            ],
            [
                "100"
            ]
        ],
        "modifier": "OffTheRecord",
        "teachable": 30,
        "image": "perks/iconPerks_OffTheRecord.png"
    },
    "Open_Handed": {
        "categories": [
            "support",
            "navigation"
        ],
        "name": "Open-Handed",
        "description": "Strengthens the potential of you and your team's aura reading abilities.<br><br><li>Increases aura reading ranges by {0} meters.</li><li>Survivors may only be affected by one <i>Open-Handed</i> effect at a time.</li>",
        "role": "survivor",
        "character": 6,
        "tunables": [
            [
                "8",
                "12",
                "16"
            ]
        ],
        "modifier": "OpenHanded",
        "teachable": 30,
        "image": "perks/iconPerks_OpenHanded.png"
    },
    "Pharmacy": {
        "categories": [
            "adaptation"
        ],
        "name": "Pharmacy",
        "description": "You have a knack for finding medicine. When injured, <i>Pharmacy</i> activates.<br><br>While active:<br><br><li>Unlocking chests is {0}% faster.</li><li>The hearing distance for noises from unlocking chests are reduced by 8 meters.</li><li><i>Pharmacy</i> guarantees an Emergency Med-kit upon completing the interaction.</li><br>",
        "role": "survivor",
        "character": 11,
        "tunables": [
            [
                "40",
                "60",
                "80"
            ]
        ],
        "modifier": "Pharmacy",
        "teachable": 35,
        "image": "perks/iconPerks_pharmacy.png"
    },
    "Plunderers_Instinct": {
        "categories": [
            "perception"
        ],
        "name": "Plunderer's Instinct",
        "description": "Unlocks potential in one's aura reading ability. The auras of unopened chests and items in the environment are revealed to you when standing within a {0} meter range. Grants a <b>considerably</b> better chance at finding an item of higher rarity from chests.",
        "role": "survivor",
        "character": null,
        "tunables": [
            [
                "16",
                "24",
                "32"
            ]
        ],
        "modifier": "PlunderersInstinct",
        "teachable": 0,
        "image": "perks/iconPerks_PlunderersInstinct.png"
    },
    "Poised": {
        "categories": [
            "concealment"
        ],
        "name": "Poised",
        "description": "Achieving goals boosts your confidence.<br><br>After a generator is completed, you leave no scratch marks for {0} seconds.",
        "role": "survivor",
        "character": 15,
        "tunables": [
            [
                "6",
                "8",
                "10"
            ]
        ],
        "modifier": "Poised_BP",
        "teachable": 35,
        "image": "perks/iconPerks_Poised.png"
    },
    "Premonition": {
        "categories": [
            "perception"
        ],
        "name": "Premonition",
        "description": "You have the undeniable capability to sense danger. Get an auditory warning when looking in the direction of the Killer in a 45 degree cone within a range of {0} meters. Premonition has a cooldown of {1} seconds each time it activates.",
        "role": "survivor",
        "character": null,
        "tunables": [
            [
                "36"
            ],
            [
                "60",
                "45",
                "30"
            ]
        ],
        "modifier": "Premonition",
        "teachable": 0,
        "image": "perks/iconPerks_Premonition.png"
    },
    "Prove_Thyself": {
        "categories": [
            "strategy",
            "support"
        ],
        "name": "Prove Thyself",
        "description": "For every other Survivor working on a generator within a {0} meter range, gain {1}% repair speed bonus. This same bonus is also applied to all other Survivors within range.<br><br>Survivors can only be affected by one Prove Thyself effect at a time.",
        "role": "survivor",
        "character": 0,
        "tunables": [
            [
                "4"
            ],
            [
                "6",
                "8",
                "10"
            ]
        ],
        "modifier": "ProveThyself",
        "teachable": 35,
        "image": "perks/iconPerks_ProveThyself.png"
    },
    "QuickQuiet": {
        "categories": [
            "navigation",
            "concealment"
        ],
        "name": "Quick & Quiet",
        "description": "You do not make as much noise as others when quickly vaulting over obstacles or hiding in lockers.<br><br>The vault and hide actions' noise detection and audio range is reduced by {0}%.<br><br>This effect can only trigger once every {1} seconds.",
        "role": "survivor",
        "character": 1,
        "tunables": [
            [
                "100"
            ],
            [
                "30",
                "25",
                "20"
            ]
        ],
        "modifier": "QuickQuiet",
        "teachable": 30,
        "image": "perks/iconPerks_QuickAndQuiet.png"
    },
    "RedHerring": {
        "categories": [
            "concealment"
        ],
        "name": "Red Herring",
        "description": "You\u2019ve noticed that people pay attention to whatever makes the loudest noise.<br><br>After repairing a generator for at least {0} seconds, it will be highlighted to you with a yellow aura. The generator stays highlighted until it is fully repaired, you repair a new generator, or enter a locker.<br><br>Entering any locker will trigger a loud noise indicator for The Killer at the highlighted generator's location.<br><br><li><i>Red Herring</i> can only be triggered once every {1} seconds.</li>",
        "role": "survivor",
        "character": 20,
        "tunables": [
            [
                "3"
            ],
            [
                "60",
                "50",
                "40"
            ]
        ],
        "modifier": "RedHerring",
        "teachable": 35,
        "image": "perks/iconPerks_RedHerring.png"
    },
    "RepressedAlliance": {
        "categories": [
            "strategy"
        ],
        "name": "Repressed&nbsp;Alliance",
        "description": "You\u2019re accustomed to being hunted by malicious&nbsp;forces, and you\u2019ve begun using it to your advantage.<br><br><i>Repressed Alliance</i>&nbsp;activates after repairing generators for a total of {0}&nbsp;seconds.<br><br>When repairing a generator while the perk is active, press the <i>Active Ability Button 1</i> to call upon The Entity to block the generator for {1}&nbsp;seconds. The perk deactivates.<br><br>This interaction is not available if other Survivors are repairing the generator.<br><br>Affected generators will be revealed by a white aura to all Survivors.",
        "role": "survivor",
        "character": 21,
        "tunables": [
            [
                "55",
                "50",
                "45"
            ],
            [
                "30"
            ]
        ],
        "modifier": "RepressedAlliance",
        "teachable": 40,
        "image": "perks/iconPerks_RepressedAlliance.png"
    },
    "Resilience": {
        "categories": [
            "navigation",
            "safeguard",
            "strategy"
        ],
        "name": "Resilience",
        "description": "You are motivated in dire situations. Grants {0}% additional speed when repairing, sabotaging, healing, unhooking, vaulting, cleansing or blessing a Totem, opening exit gates, and unlocking while injured.",
        "role": "survivor",
        "character": null,
        "tunables": [
            [
                "3",
                "6",
                "9"
            ]
        ],
        "modifier": "Resilience",
        "teachable": 0,
        "image": "perks/iconPerks_Resilience.png"
    },
    "S24P01": {
        "categories": [
            "support"
        ],
        "name": "Appraisal",
        "description": "You have a careful eye that notices what many overlook.<br><br>Start the trial with {0} tokens. When a chest has already been opened, consume a token to rummage through it for an item. Rummaging can only be performed once per chest.<br><br>You rummage through chests {1}% faster.",
        "role": "survivor",
        "character": 23,
        "tunables": [
            [
                "3"
            ],
            [
                "40",
                "60",
                "80"
            ]
        ],
        "modifier": "BP_Appraisal",
        "teachable": 30,
        "image": "perks/iconPerks_Appraisal.png"
    },
    "S24P02": {
        "categories": [
            "concealment"
        ],
        "name": "Deception",
        "description": "Your&nbsp;adventurous lifestyle&nbsp;requires&nbsp;moments of&nbsp;crafty misdirection.<br><br>Interacting with a locker while sprinting will trigger a loud noise notification at your location and cause you to leave no scratch marks for&nbsp;{0} seconds.<br><br>You no longer enter lockers while sprinting and while this perk is active.<br><br><i>Deception</i> can only be triggered once every&nbsp;{1} seconds.",
        "role": "survivor",
        "character": 23,
        "tunables": [
            [
                "3"
            ],
            [
                "60",
                "50",
                "40"
            ]
        ],
        "modifier": "BP_Deception",
        "teachable": 35,
        "image": "perks/iconPerks_Deception.png"
    },
    "S24P03": {
        "categories": [
            "adaptation"
        ],
        "name": "Power Struggle",
        "description": "You\u2019ve never given up and you\u2019re not about to start now.<br><br>Whenever you are in the dying state, you see the auras of available Pallets.<br><br>While being carried by The Killer, reaching {0}% wiggle progress activates <i>Power Struggle</i>. While <i>Power Struggle</i> is active, you can drop a nearby, standing pallet to stun The Killer.",
        "role": "survivor",
        "character": 23,
        "tunables": [
            [
                "25",
                "20",
                "15"
            ]
        ],
        "modifier": "BP_PowerStruggle",
        "teachable": 40,
        "image": "perks/iconPerks_PowerStruggle.png"
    },
    "S25P01": {
        "categories": [
            "strategy"
        ],
        "name": "Fast Track",
        "description": "Sometimes the sacrifice of others is necessary to get ahead.<br><br>Whenever another Survivor is hooked, you gain {0} tokens. You consume all tokens after a great Skill Check on a generator. Each token consumed grants a {1}% bonus progression for great Skill Checks when repairing generators.",
        "role": "survivor",
        "character": 24,
        "tunables": [
            [
                "1",
                "2",
                "3"
            ],
            [
                "1"
            ]
        ],
        "modifier": "BP_FastTrack",
        "teachable": 30,
        "image": "perks/iconPerks_FastTrack.png"
    },
    "S25P02": {
        "categories": [
            "navigation"
        ],
        "name": "Smash Hit",
        "description": "When your rival makes a mistake, you seize the opportunity.<br><br>After stunning the Killer with a pallet, break into a sprint at {0}% your normal running speed for {1} seconds.<br><br>Causes the <b>Exhausted</b> status effect for {2} seconds.<br><br>This perk cannot be used while <b>Exhausted</b>.<br><br>Exhausted prevents Survivors from activating exhausting perks.",
        "role": "survivor",
        "character": 24,
        "tunables": [
            [
                "150"
            ],
            [
                "4"
            ],
            [
                "30",
                "25",
                "20"
            ]
        ],
        "modifier": "BP_SmashHit",
        "teachable": 35,
        "image": "perks/iconPerks_SmashHit.png"
    },
    "S25P03": {
        "categories": [
            "concealment"
        ],
        "name": "Self-Preservation",
        "description": "Life's unforgiving. Sometimes it's best to look out for yourself.<br><br>Whenever another Survivor within {0} meters of you gets hit by a basic attack or a special attack, <i>Self-Preservation</i> activates.<br><br>Your scratch marks, pools of blood and grunts of pain are hidden for {1} seconds.",
        "role": "survivor",
        "character": 24,
        "tunables": [
            [
                "16"
            ],
            [
                "6",
                "8",
                "10"
            ]
        ],
        "modifier": "BP_SelfPreservation",
        "teachable": 40,
        "image": "perks/iconPerks_Self-Preservation.png"
    },
    "S26P01": {
        "categories": [
            "perception"
        ],
        "name": "Counterforce",
        "description": "You know how to withstand an enemy stronger than you, and it starts with hunting down and knocking out their support.<br><br>You cleanse Totems 20% faster. After cleansing a Totem, you see the aura of the furthest Totem from you for {0} seconds and you gain an additional {1}% stackable speed bonus to cleansing Totems for the remainder of the trial.",
        "role": "survivor",
        "character": 25,
        "tunables": [
            [
                "2",
                "3",
                "4"
            ],
            [
                "20"
            ]
        ],
        "modifier": "BP_Counterforce",
        "teachable": 30,
        "image": "perks/iconPerks_Counterforce.png"
    },
    "S26P02": {
        "categories": [
            "adaptation"
        ],
        "name": "Resurgence",
        "description": "You've come back from near impossible odds... and you'll do it again.<br><br>Gain {0}% healing progress instantly after being unhooked or unhooking yourself.",
        "role": "survivor",
        "character": 25,
        "tunables": [
            [
                "40",
                "45",
                "50"
            ]
        ],
        "modifier": "BP_Resurgence",
        "teachable": 35,
        "image": "perks/iconPerks_Resurgence.png"
    },
    "S26P03": {
        "categories": [
            "adaptation"
        ],
        "name": "Blast Mine",
        "description": "When direct combat isn't an option, you still find ways to strike back.<br><br><i>Blast Mine</i> activates after completing a total of {0}% worth of repair progress on generators.<br><br>Press the <i>Active Ability Button 1</i> to install a trap which stays active for {2} seconds.<br><br>Affected generators will be revealed to all Survivors by a yellow aura. Only one Blast Mine can be active on a generator.<br><br><li>When the Killer damages the trapped generator, the trap explodes, stunning them and blinding anyone nearby.</li><li><i>Blast Mine</i> deactivates when the trapped generator is damaged by the Killer or when the timer expires.</li>",
        "role": "survivor",
        "character": 25,
        "tunables": [
            [
                "50"
            ],
            [
                "3"
            ],
            [
                "100",
                "110",
                "120"
            ]
        ],
        "modifier": "BP_BlastMine",
        "teachable": 40,
        "image": "perks/iconPerks_BlastMine.png"
    },
    "S27P01": {
        "categories": [
            "safeguard"
        ],
        "name": "Bite the Bullet",
        "description": "Pain hurts you as much as anyone, but you'd prefer others don't know that.<br><br>When healing, you and the Survivor you're healing make no noise, including grunts of pain. There is no noise notification on failed healing Skill Checks and healing regresses by only {0}%.",
        "role": "survivor",
        "character": 26,
        "tunables": [
            [
                "3",
                "2",
                "1"
            ]
        ],
        "modifier": "BP_BiteTheBullet",
        "teachable": 30,
        "image": "perks/iconPerks_BiteTheBullet.png"
    },
    "S27P02": {
        "categories": [
            "adaptation"
        ],
        "name": "Flashbang",
        "description": "You've adapted to a world in chaos and making what you can from the debris.<br><br>After completing {0}% progress on any generator, <i>Flashbang</i> activates.<br><br>Enter a locker and press the <i>Active Ability Button 1</i> to craft a flash grenade.<br><br><li>1 charge.</li><li>Detonates with a loud bang and flashing light.</li><li>Creates a noise notification.</li><li>Can be used to distract or blind.</li><br><br>You leave the flash grenade behind when escaping the trial.",
        "role": "survivor",
        "character": 26,
        "tunables": [
            [
                "70",
                "60",
                "50"
            ]
        ],
        "modifier": "BP_Flashbang",
        "teachable": 35,
        "image": "perks/iconPerks_Flashbang.png"
    },
    "S27P03": {
        "categories": [
            "perception"
        ],
        "name": "Rookie Spirit",
        "description": "You keep a careful eye on objectives when they're slipping away.<br><br>Complete {0} good or great Skill Checks while repairing generators to activate <i>Rookie Spirit</i> for the remainder of the trial.<br><br>Once active, you can see the aura of regressing generators.",
        "role": "survivor",
        "character": 26,
        "tunables": [
            [
                "5",
                "4",
                "3"
            ]
        ],
        "modifier": "BP_RookieSpirit",
        "teachable": 40,
        "image": "perks/iconPerks_RookieSpirit.png"
    },
    "S28P01": {
        "categories": null,
        "name": "Clairvoyance",
        "description": "There is an intrinsic energy in you that sees beyond your vision.<br><br><i>Clairvoyance</i> activates whenever you cleanse or bless a Totem.<br><br>When empty-handed, hold the <i>Ability Button</i> to unlock your full aura-reading potential. For up to {0} seconds, you see the auras of exit gate switches, generators, hooks, chests and the Hatch within a {1} meter range.",
        "role": "survivor",
        "character": 27,
        "tunables": [
            [
                "8",
                "9",
                "10"
            ],
            [
                "64"
            ]
        ],
        "modifier": "BP_S28P01",
        "teachable": 30,
        "image": "perks/iconPerks_Clairvoyance.png"
    },
    "S28P02": {
        "categories": null,
        "name": "Boon: Circle of Healing",
        "description": "A boon that offers comfort amidst the terror.<br><br>Press and hold the <i>Ability button 1</i> near a Dull or Hex Totem to bless it and create a Boon Totem. Soft chimes ring out in a {0} meter range.<br><br>Any Survivors within the Boon Totem's range gain a {1}% healing speed bonus to healing others. Medkits give no bonus to healing in the Boon Totem's range. Injured Survivors have their auras revealed to all other Survivors when inside the Boon Totem\u2019s range.<br><br>You can only bless one Totem at a time. All equipped boon perks are active on your Boon Totem.",
        "role": "survivor",
        "character": 27,
        "tunables": [
            [
                "24"
            ],
            [
                "50",
                "75",
                "100"
            ]
        ],
        "modifier": "BP_S28P02",
        "teachable": 35,
        "image": "perks/iconPerks_BoonCircleOfHealing.png"
    },
    "S28P03": {
        "categories": null,
        "name": "Boon: Shadow Step",
        "description": "A boon that conceals the truth.<br><br>Press and hold the <i>Ability button</i> near a Dull or Hex Totem to bless it and create a Boon Totem. Soft chimes ring out in a {0} meter range.<br><br>Any Survivors within the Boon Totem\u2019s range will have their scratch marks and auras hidden to the Killer. This effect lingers for {1} seconds after leaving the Boon Totem\u2019s range.<br><br>You can only bless one Totem at a time. All equipped boon perks are active on your Boon Totem.",
        "role": "survivor",
        "character": 27,
        "tunables": [
            [
                "24"
            ],
            [
                "2",
                "3",
                "4"
            ]
        ],
        "modifier": "BP_S28P03",
        "teachable": 40,
        "image": "perks/iconPerks_BoonShadowStep.png"
    },
    "S29P01": {
        "categories": null,
        "name": "Overcome",
        "description": "You've calculated how much energy you can risk to expend.<br><br>When you are injured, you retain the movement speed bonus for {0} seconds longer.<br><br><i>Overcome</i> causes the <b>Exhausted</b> status effect for {1} seconds.<br><br><i>Overcome</i> cannot be used when Exhausted.<br><br>Exhausted prevents Survivors from activating exhausting perks.",
        "role": "survivor",
        "character": 28,
        "tunables": [
            [
                "2"
            ],
            [
                "60",
                "50",
                "40"
            ]
        ],
        "modifier": "BP_Overcome",
        "teachable": 30,
        "image": "perks/T_iconPerks_Overcome.png"
    },
    "S29P02": {
        "categories": null,
        "name": "Corrective Action",
        "description": "You quickly analyze problems and correct other's work when they make a mistake.<br><br>You start the trial with {0} token(s) and gain a token, up to a maximum of {1}, for every great Skill Check.<br><br>When a Survivor fails a Normal Skill Check while cooperating with you, 1 token is consumed and their failed Skill Check becomes a good Skill Check.",
        "role": "survivor",
        "character": 28,
        "tunables": [
            [
                "1",
                "2",
                "3"
            ],
            [
                "5"
            ]
        ],
        "modifier": "BP_CorrectiveAction",
        "teachable": 35,
        "image": "perks/T_iconPerks_CorrectiveAction.png"
    },
    "S29P03": {
        "categories": null,
        "name": "Boon: Exponential",
        "description": "When it seems like your number is up, you consider ways to recalculate the odds.<br><br>Press and hold the <i>Ability button</i> near a Dull or Hex Totem to bless it and create a Boon Totem. Soft chimes ring out in a {0} meter range.<br><br>All Survivors within the Boon Totem's range recover {1}% faster and can completely recover from the dying state.<br><br>You can only bless one Totem at a time. All equipped boon perks are active on your Boon Totem.",
        "role": "survivor",
        "character": 28,
        "tunables": [
            [
                "24"
            ],
            [
                "90",
                "95",
                "100"
            ]
        ],
        "modifier": "BP_S29P03",
        "teachable": 40,
        "image": "perks/T_iconPerks_BoonExponential.png"
    },
    "S30P01": {
        "categories": null,
        "name": "Parental Guidance",
        "description": "You have inherited the ability to hear the dead \u2013 and now, the dead warn you of danger.<br><br>After stunning the Killer by any means, your scratch marks, pools of blood and grunts of pain are hidden for {0} seconds.",
        "role": "survivor",
        "character": 29,
        "tunables": [
            [
                "5",
                "6",
                "7"
            ]
        ],
        "modifier": "BP_S30P01",
        "teachable": 30,
        "image": "perks/iconPerks_ParentalGuidance.png"
    },
    "S30P02": {
        "categories": null,
        "name": "Empathic Connection",
        "description": "Your presence psychically projects itself to those in danger.<br><br>Whenever another Survivor is injured, they can see your aura within a range of {0} meters.<br><br>You heal other Survivors {1}% faster.",
        "role": "survivor",
        "character": 29,
        "tunables": [
            [
                "32",
                "64",
                "96"
            ],
            [
                "10"
            ]
        ],
        "modifier": "BP_S30P02",
        "teachable": 35,
        "image": "perks/iconPerks_EmpathicConnection.png"
    },
    "S30P03": {
        "categories": null,
        "name": "Boon: Dark Theory",
        "description": "Your obsessive study of the paranormal has given you unprecedented knowledge of other realms and planes of existence.<br><br>Press and hold the <i>Ability button</i> near a Dull or Hex Totem to bless it and create a Boon Totem. Soft chimes ring out in a {0} meter range.<br><br>Any Survivors within the Boon Totem\u2019s range gain a {1}% <b>Haste</b> status effect. This effect lingers for {2} seconds after leaving the Boon Totem's range.<br><br>You can only bless one Totem at a time. All equipped boon perks are active on your Boon Totem.<br><br>Haste increases Survivor movement speed.",
        "role": "survivor",
        "character": 29,
        "tunables": [
            [
                "24"
            ],
            [
                "2"
            ],
            [
                "2",
                "3",
                "4"
            ]
        ],
        "modifier": "BP_S30P03",
        "teachable": 40,
        "image": "perks/iconPerks_DarkTheory.png"
    },
    "S31P01": {
        "categories": null,
        "name": "Inner Focus",
        "description": "You have honed your ability to see through the haze of the Ravage.<br><br>You can see other Survivors' scratch marks.<br><br>Whenever another Survivor loses a health state within <b>{2} meters</b> of you, the Killer's aura is revealed to you for {0} seconds.",
        "role": "survivor",
        "character": 30,
        "tunables": [
            [
                "3",
                "4",
                "5"
            ],
            [
                "32"
            ],
            [
                "32"
            ]
        ],
        "modifier": "BP_S31P01",
        "teachable": 30,
        "image": "perks/iconPerks_InnerFocus.png"
    },
    "S31P02": {
        "categories": null,
        "name": "Residual Manifest",
        "description": "A lifetime of chasing the darkness has taught you that the best disinfectant is light.<br><br>After a successful Killer Blind action, the Killer is affected by the <b>Blindness</b> status effect for {0} seconds.<br><br>This perk grants the ability to rummage through an opened chest once per trial and will guarantee a basic Flashlight.<br><br>Blindness prevents the Killer from seeing auras.",
        "role": "survivor",
        "character": 30,
        "tunables": [
            [
                "20",
                "25",
                "30"
            ]
        ],
        "modifier": "BP_S31P02",
        "teachable": 35,
        "image": "perks/iconPerks_ResidualManifest.png"
    },
    "S31P03": {
        "categories": null,
        "name": "Overzealous",
        "description": "Fighting back against the Ravage motivates and inspires you.<br><br>After cleansing or blessing a Totem, this perk activates.<br><br>Your generator repair speed is increased by {0}%. This bonus is doubled if you cleanse or bless a Hex totem.<br><br>This perk deactivates when you lose a health state by any means.",
        "role": "survivor",
        "character": 30,
        "tunables": [
            [
                "8",
                "9",
                "10"
            ]
        ],
        "modifier": "BP_S31P03",
        "teachable": 40,
        "image": "perks/iconPerks_Overzealous.png"
    },
    "S32P01": {
        "categories": null,
        "name": "Wiretap",
        "description": "You know that the best way to stay one step ahead is to keep tabs on the competition.<br><br><i>Wiretap</i> activates after completing a total of {1}% worth of repair progress on generators.<br><br>Press the <i>Active Ability button 1</i> to install a Wiretap, which stays active for {0} seconds.<br><br>Affected generators will be revealed to all Survivors by a yellow aura. Only one trap can be active on a generator.<br><br><li>When the Killer enters within {3} meters of the trapped generator, their aura is revealed to all Survivors.<ul><li><i>Wiretap</i> deactivates when the trapped generator is damaged by the Killer or when the timer expires.</li></ul></li>",
        "role": "survivor",
        "character": 31,
        "tunables": [
            [
                "100",
                "110",
                "120"
            ],
            [
                "50"
            ],
            [
                "3"
            ],
            [
                "14"
            ]
        ],
        "modifier": "BP_S32P01",
        "teachable": 30,
        "image": "perks/iconPerks_Wiretap.png"
    },
    "S32P02": {
        "categories": null,
        "name": "Reactive Healing",
        "description": "The more the situation becomes compromised, the more determined you become to complete the operation.<br><br>When another Survivor loses a health state in a {1}-meter radius around you while you are injured, instantly increase your healing progression by {0}% of the missing healing progression.",
        "role": "survivor",
        "character": 31,
        "tunables": [
            [
                "40",
                "45",
                "50"
            ],
            [
                "32"
            ]
        ],
        "modifier": "BP_S32P02",
        "teachable": 35,
        "image": "perks/iconPerks_ReactiveHealing.png"
    },
    "S32P03": {
        "categories": null,
        "name": "Low Profile",
        "description": "You work best alone. When it\u2019s just you and your pursuer, you know how to disappear.<br><br>When you become the last Survivor standing, this perk activates. Hide your scratch marks, pools of blood and grunts of pain caused by injuries for {0} seconds.",
        "role": "survivor",
        "character": 31,
        "tunables": [
            [
                "70",
                "80",
                "90"
            ]
        ],
        "modifier": "BP_S32P03",
        "teachable": 40,
        "image": "perks/iconPerks_LowProfile.png"
    },
    "S33P01": {
        "categories": null,
        "name": "Better Than New",
        "description": "You are an expert in combat medicine. Patients leave your care reinvigorated.<br><br>Upon completing a healing action on another Survivor, the targeted Survivor gets a {0}% speed boost to healing, opening chests, cleansing and blessing Totems.<br><br>Survivors keep the bonus until they lose a health state.",
        "role": "survivor",
        "character": 32,
        "tunables": [
            [
                "12",
                "14",
                "16"
            ]
        ],
        "modifier": "BP_S33P01",
        "teachable": 30,
        "image": "perks/iconPerks_BetterThanNew.png"
    },
    "S33P02": {
        "categories": null,
        "name": "Reassurance",
        "description": "Your presence helps allies focus, assuaging the panic associated with extreme conditions.<br><br>When within a {2}-meter radius around a hooked Survivor, use the <i>Active Ability Button 2</i> to pause their struggle progression for {0} seconds.<br><br>If they are on the struggle phase, it also pauses the Struggle Skill Checks.<br><br>Reassurance can only be triggered once per survivor per hook instance.",
        "role": "survivor",
        "character": 32,
        "tunables": [
            [
                "20",
                "25",
                "30"
            ],
            [
                "40"
            ],
            [
                "6"
            ]
        ],
        "modifier": "BP_S33P02",
        "teachable": 35,
        "image": "perks/iconPerks_Reassurance.png"
    },
    "S33P03": {
        "categories": null,
        "name": "Hyperfocus",
        "description": "You throw yourself entirely into your tasks and find ways to be more efficient than anyone else.<br><br>After hitting a great Skill Check while repairing or healing, this perk gains {1} token, up to {2} tokens. Each token increases the chance of Skill Check trigger by {3}%, the Skill Check cursor speed by {4}% and the bonus progression for great Skill Checks by {0}% of its base value.<br><br>The perk loses all tokens in case of normal Skill Check successes, Skill Check fails, or if the action is stopped by any means.",
        "role": "survivor",
        "character": 32,
        "tunables": [
            [
                "10",
                "20",
                "30"
            ],
            [
                "1"
            ],
            [
                "6"
            ],
            [
                "4"
            ],
            [
                "4"
            ]
        ],
        "modifier": "BP_S33P03",
        "teachable": 40,
        "image": "perks/iconPerks_Hyperfocus.png"
    },
    "S34P01": {
        "categories": null,
        "name": "Potential Energy",
        "description": "Your arcane abilities have adapted to The Entity's Realm after centuries of wandering, granting you unprecedented control over its many devices.<br><br>After working on a generator for {0} uninterrupted seconds, press the <i>Active Ability Button 2</i> to activate this perk. When this perk is active, repairing the generator will charge this perk instead of making the generator progress. For each 1.5% of generator repair, the perk will gain 1 token, up to {1} tokens.<br><br>While this perk has at least one token and you are working on a generator, you can press the <i>Active Ability Button 2</i> to consume all the tokens and instantly make the generator progress by 1% for each token. This perk then deactivates.<br><br>If you lose a health state while this perk has at least {3} token, the perk will lose all tokens and deactivate. Missing a Skill Check will also result in some tokens lost.",
        "role": "survivor",
        "character": 33,
        "tunables": [
            [
                "12",
                "10",
                "8"
            ],
            [
                "20"
            ],
            [
                "1"
            ],
            [
                "1"
            ]
        ],
        "modifier": "BP_S34P01",
        "teachable": 30,
        "image": "perks/iconPerks_PotentialEnergy.png"
    },
    "S34P02": {
        "categories": null,
        "name": "Fogwise",
        "description": "In your countless years in the fog, you've seen it all, and when you're focused, you can remember most of it, too.<br><br>Hitting a great Skill Check while repairing a generator reveals the Killer's aura to you for {0} seconds.",
        "role": "survivor",
        "character": 33,
        "tunables": [
            [
                "4",
                "5",
                "6"
            ]
        ],
        "modifier": "BP_S34P02",
        "teachable": 35,
        "image": "perks/iconPerks_Fogwise.png"
    },
    "S34P03": {
        "categories": null,
        "name": "Quick Gambit",
        "description": "When you have a Killer's attention, you know how to keep it; others can be confident they won't be interrupted any time soon.<br><br>When you are chased within {0} meters of any generator, any other Survivor working on that generator receives a {1}% speed boost to the repair action.",
        "role": "survivor",
        "character": 33,
        "tunables": [
            [
                "24"
            ],
            [
                "6",
                "7",
                "8"
            ]
        ],
        "modifier": "BP_S34P03",
        "teachable": 40,
        "image": "perks/iconPerks_VittoriosGambit.png"
    },
    "S35P01": {
        "categories": [
            "concealment"
        ],
        "name": "Cut Loose",
        "description": "You get in enough trouble. You know how to get out of it.<br><br>After performing a rushed vault in a chase, this perk activates.<br><br>While this perk is active, your rushed vaults are silent for up to {0} seconds and successfully performing a rushed vault during that time resets the timer.<br><br>This perk goes on cool-down for {1} seconds.&nbsp;",
        "role": "survivor",
        "character": 34,
        "tunables": [
            [
                "4",
                "5",
                "6"
            ],
            [
                "45"
            ]
        ],
        "modifier": "BP_S35P01",
        "teachable": 30,
        "image": "perks/iconPerks_CutLoose.png"
    },
    "S35P02": {
        "categories": [
            "strategy"
        ],
        "name": "Friendly Competition",
        "description": "You revel in the community spirit of a competition, and inspire others to follow suit.<br><br>Whenever you finish repairing a generator with at least one other Survivor, this perk activates.<br><br>You and other survivors who finished repairing the generator with you get {0}% increased repair progress speed&nbsp;for {1} seconds.<br><br><i>Survivors can only have one instance of this perk's ability active at once.</i>",
        "role": "survivor",
        "character": 34,
        "tunables": [
            [
                "5"
            ],
            [
                "45",
                "60",
                "75"
            ]
        ],
        "modifier": "BP_S35P02",
        "teachable": 35,
        "image": "perks/iconPerks_FriendlyCompetition.png"
    },
    "S35P03": {
        "categories": [
            "support"
        ],
        "name": "Teamwork: Power of Two",
        "description": "It\u2019s hard to keep up with you, but it doesn\u2019t stop people from trying.<br><br>Whenever you finish healing another Survivor, you both move&nbsp;{0}%&nbsp;faster as&nbsp;long as you stay within {1} meters&nbsp;of the Survivor you healed or until one of you loses a health state.<br><br><i>Teamwork: Power of Two</i> can only trigger once every {2} seconds.<br><br>Survivors can only be affected by one <i>Teamwork: Power of Two</i> effect at a time.",
        "role": "survivor",
        "character": 34,
        "tunables": [
            [
                "5"
            ],
            [
                "12"
            ],
            [
                "180",
                "160",
                "140"
            ]
        ],
        "modifier": "BP_S35P03",
        "teachable": 40,
        "image": "perks/iconPerks_TeamworkPowerOfTwo.png"
    },
    "S36P01": {
        "categories": [
            "navigation"
        ],
        "name": "Background Player",
        "description": "You're not usually the center of attention. In some cases, this can be a good thing.<br><br>When the Killer picks-up another Survivor, <i>Background Player</i> activates for {0} seconds.<br><br>When you start running, break into a sprint at {1}% of your normal Running Movement speed for {2} seconds.<br><br><i>This perk cannot be used while Exhausted.</i><br><br>This perk causes the Exhausted status effect for {3} seconds.&nbsp;<br><br>Exhausted prevents Survivors from activating exhausting perks.",
        "role": "survivor",
        "character": 35,
        "tunables": [
            [
                "10"
            ],
            [
                "150"
            ],
            [
                "4"
            ],
            [
                "60",
                "50",
                "40"
            ]
        ],
        "modifier": "BP_S36P01",
        "teachable": 30,
        "image": "perks/iconPerks_BackgroundPlayer.png"
    },
    "S36P02": {
        "categories": [
            "strategy"
        ],
        "name": "Blood Rush",
        "description": "Your mind and body are honed for great feats, allowing you to push through with extra effort when necessary.<br><br>This perk activates once you are one hook away from instant death.<br><br>While healthy, running, and suffering from Exhaustion, press the <i>Active Ability Button 1</i> to lose a health state and recover from Exhaustion instantly and gain the Broken status effect for {0} seconds.<br><br>You are automatically healed from injured to healthy after {1} seconds. Being put into the dying state will cancel the healing effect.<br><br><i>Activating Blood Rush will disable it for the remainder of the trial.</i><br><br>Exhaustion prevents Survivors from activating other perks that cause Exhaustion.<br><br>Broken prevents Survivors from being healed.",
        "role": "survivor",
        "character": 35,
        "tunables": [
            [
                "28",
                "24",
                "20"
            ],
            [
                "28",
                "24",
                "20"
            ]
        ],
        "modifier": "BP_S36P02",
        "teachable": 35,
        "image": "perks/iconPerks_BloodRush.png"
    },
    "S36P03": {
        "categories": [
            "support"
        ],
        "name": "Teamwork: Collective Stealth",
        "description": "When someone helps you out, you respond in kind.<br><br>Whenever another Survivor finishes healing you, you both leave no scratch marks as&nbsp;long as you stay within {1} meters&nbsp;of the Survivor who healed you or until one of you loses a health state.<br><br><i>Teamwork: Collective Stealth</i> can only trigger once every {2} seconds.<br><br>Survivors can only be affected by one <i>Teamwork: Collective Stealth</i> effect at a time.",
        "role": "survivor",
        "character": 35,
        "tunables": {
            "1": [
                "12"
            ],
            "2": [
                "180",
                "160",
                "140"
            ]
        },
        "modifier": "BP_S36P03",
        "teachable": 40,
        "image": "perks/iconPerks_TeamworkCollectiveStealth.png"
    },
    "S37P01": {
        "categories": [
            "strategy"
        ],
        "name": "Troubleshooter",
        "description": "No amount of distraction will shake you from your primary task.<br><br>When you are chased by the Killer, <i>Troubleshooter</i> activates.<br><br><li>You see the aura of the Generator with the most progress.</li><li>You see the aura of the Killer for {0} seconds after dropping a Pallet.</li><br><br>The effect lasts for {1} seconds after being in chase, then deactivates.",
        "role": "survivor",
        "character": 36,
        "tunables": [
            [
                "4",
                "5",
                "6"
            ],
            [
                "6",
                "8",
                "10"
            ]
        ],
        "modifier": "BP_S37P01",
        "teachable": 30,
        "image": "perks/IconPerks_troubleshooter.png"
    },
    "S37P02": {
        "categories": [
            "safeguard"
        ],
        "name": "Made for This",
        "description": "You were born to survive, and raised to adapt.<br><br><i>Made for This</i> activates while you are in the injured state.<br><br><li>You run {0}% faster.</li><li>After you finish healing another Survivor, gain the <b>Endurance</b> status effect for {1} seconds.</li><br><br><i>Made for This cannot be used when suffering from Exhaustion, but does not cause the Exhausted Status Effect.</i><br><br>Endurance prevents a survivor from being downed, inflicting Deep Wound instead.<br><br>Deep Wound will put a Survivor in the dying state unless it is mended before the timer runs out.",
        "role": "survivor",
        "character": 36,
        "tunables": [
            [
                "1",
                "2",
                "3"
            ],
            [
                "6",
                "8",
                "10"
            ]
        ],
        "modifier": "BP_S37P02",
        "teachable": 35,
        "image": "perks/IconPerks_madeForThis.png"
    },
    "S37P03": {
        "categories": [
            "adaptation"
        ],
        "name": "Scavenger",
        "description": "Where others see junk, you see valuable improvised tools.<br><br>While you are holding an empty toolbox, <i>Scavenger</i> activates.<br><br>Succeeding a great skill check while repairing gains {0} token, up to {1}.<br><br>When you reach maximum tokens, lose all tokens and automatically recharge your toolbox to full. Then, your generator repair speed is {2}% slower for {3} seconds.<br><br>This perk grants the ability to rummage through an opened chest once per Trial and will guarantee a basic Toolbox.",
        "role": "survivor",
        "character": 36,
        "tunables": [
            [
                "1"
            ],
            [
                "5"
            ],
            [
                "50"
            ],
            [
                "40",
                "35",
                "30"
            ]
        ],
        "modifier": "BP_S37P03",
        "teachable": 40,
        "image": "perks/IconPerks_scavenger.png"
    },
    "S38P01": {
        "categories": null,
        "name": "Dramaturgy",
        "description": "When people bring you on to their project, they do so because of the unexpected magic you bring to your performance.<br><br><i>Dramaturgy</i> activates while you are healthy.<br><br>While running, press the <i>active ability button 2</i> to run with knees high for 0.5 seconds and then gain {0}% Haste for {1} seconds, followed by a unknown effect.<br><br><ul><li>Become <b>Exposed</b> for {2} seconds;</li><li>Gain {3}% <b>Haste</b> for {4} seconds;</li><li>Scream, but nothing happens;</li><li>Gain a random rare item, with random add-ons, and drop any held item.</li></ul><i>The same effect cannot happen twice in a row.</i><br><br><i>Dramaturgy</i> causes <b>exhaustion</b> for {5} seconds. Can't be used while exhausted.<br><br>Exposed Survivors will be downed by basic attacks even if uninjured.<br><br>Haste increases Survivor movement speed.<br><br>Exhaustion prevents Survivors from activating other perks that cause Exhaustion.",
        "role": "survivor",
        "character": 37,
        "tunables": [
            [
                "25"
            ],
            [
                "2"
            ],
            [
                "12"
            ],
            [
                "25"
            ],
            [
                "2"
            ],
            [
                "60",
                "50",
                "40"
            ]
        ],
        "modifier": "BP_S38P01",
        "teachable": 30,
        "image": "perks/iconPerks_Dramaturgy.png"
    },
    "S38P02": {
        "categories": null,
        "name": "Scene Partner",
        "description": "You lock in with your co-star, engaging with and reacting to each other on a higher level.<br><br><i>Scene Partner</i> activates when you are in the Killer's Terror Radius.<br><br>Whenever you look at the Killer, scream, then see the Killer's aura for {0} seconds.<br><br><i>There is a chance you will scream again, if you do, you will see the Killer's aura for an additional 2 seconds.</i><br><br><i>Scene Partner</i> then goes on cool-down for {1} seconds.",
        "role": "survivor",
        "character": 37,
        "tunables": [
            [
                "3",
                "4",
                "5"
            ],
            [
                "60"
            ]
        ],
        "modifier": "BP_S38P02",
        "teachable": 35,
        "image": "perks/iconPerks_ScenePartner.png"
    },
    "S38P03": {
        "categories": null,
        "name": "Plot Twist",
        "description": "Big moments are vital, but you know that sometimes an understated read can be just as powerful.<br><br><i>Plot Twist</i> activates when you are injured.<br><br>Press the <i>ability button 2</i> while crouched and motionless to enter the dying state silently.<br><br>When using <i>Plot Twist</i> to enter the dying state: you leave no blood pools and you make no noise and you can fully recover from the dying state.<br><br>When you recover by yourself using <i>Plot Twist</i>, you are healed instantly and you gain {0}% Haste for {1} seconds.<br><br><i>This perk deactivates if you recover by yourself by any means.<br><br>This perk re-activates when the exit gates are powered.</i><br><br>Haste increases Survivor movement speed.",
        "role": "survivor",
        "character": 37,
        "tunables": [
            [
                "50"
            ],
            [
                "2",
                "3",
                "4"
            ]
        ],
        "modifier": "BP_S38P03",
        "teachable": 40,
        "image": "perks/iconPerks_PlotTwist.png"
    },
    "S39P01": {
        "categories": null,
        "name": "Lucky Star",
        "description": "You know how to stay calm in the face of incomprehensible danger.<br><br>When you hide in a locker, this perk activates.<br><br>You leave no pools of blood and make no grunts of pain for {0} seconds.<br><br>When you exit a locker, you see other Survivors and the closest generator's aura in yellow for {1} seconds.<br><br>This perk goes on cooldown for {2} seconds.<br><br>\u201cYou are my\u2026 lucky star\u2026\u201d \u2013Ellen Ripley",
        "role": "survivor",
        "character": 38,
        "tunables": [
            [
                "10"
            ],
            [
                "10"
            ],
            [
                "40",
                "35",
                "30"
            ]
        ],
        "modifier": "BP_S39P01",
        "teachable": 30,
        "image": "perks/iconPerks_LuckyStar.png"
    },
    "S39P02": {
        "categories": null,
        "name": "Chemical Trap",
        "description": "In the Fog, an officer must adapt to the materials at hand.<br><br>After completing {0}% progress on any generator, this perk activates.<br><br>While standing next to a dropped pallet, press the <i>Active Ability Button 2</i> to install a Trap, which stays active for {1} seconds.<br><br>The aura of trapped pallets are revealed in yellow to all Survivors.<br><br>When the Killer performs the break action on the trapped pallet, the trap explodes, and they are slowed by {2}% for {3} seconds.<br><br>\u201cHow do we kill it, Ash?\u201d \u2013Ellen Ripley",
        "role": "survivor",
        "character": 38,
        "tunables": [
            [
                "70",
                "60",
                "50"
            ],
            [
                "100",
                "110",
                "120"
            ],
            [
                "50"
            ],
            [
                "4"
            ]
        ],
        "modifier": "BP_S39P02",
        "teachable": 30,
        "image": "perks/iconPerks_ChemicalTrap.png"
    },
    "S39P03": {
        "categories": null,
        "name": "Light-footed",
        "description": "Crossing paths with deadly killers has taught you the value of discretion.<br><br>When you are healthy, this perk activates.<br><br>Your running footsteps are silent.<br><br>This perk goes on cooldown for {0} seconds after performing a rushed action.<br><br>\u201cCome on, cat.\u201d \u2013Ellen Ripley",
        "role": "survivor",
        "character": 38,
        "tunables": [
            [
                "28",
                "24",
                "20"
            ]
        ],
        "modifier": "BP_S39P03",
        "teachable": 30,
        "image": "perks/iconPerks_LightFooted.png"
    },
    "Saboteur": {
        "categories": [
            "strategy"
        ],
        "name": "Saboteur",
        "description": "Unlocks potential in one's aura reading ability.<br><br><li>See hook auras in a 56 meter radius from the pickup spot if another Survivor is being carried. Scourge Hooks are shown in yellow.</li><li>Unlocks the ability to sabotage hooks without a Toolbox.</li><li>Sabotaging a hook without a Toolbox takes 2.3 seconds.</li><li>The sabotage action has a {0} second cooldown.</li>",
        "role": "survivor",
        "character": 3,
        "tunables": [
            [
                "70",
                "65",
                "60"
            ]
        ],
        "modifier": "Saboteur",
        "teachable": 40,
        "image": "perks/iconPerks_Saboteur.png"
    },
    "SecondWind": {
        "categories": [
            "adaptation"
        ],
        "name": "Renewal",
        "description": "When you have healed other Survivors for the equivalent of one health state, <i>Renewal</i> activates. If you are already afflicted by the <b>Broken</b> status effect, <i>Renewal</i> does not activate.<br><br>While <i>Renewal</i> is activated, the next time you are unhooked or you unhook yourself, you are affected by the <b>Broken</b> status effect.&nbsp;After a total duration of&nbsp;{0} seconds,&nbsp;<i>Renewal</i> automatically heals you from injured to healthy.<br><br><i>Renewal</i>&nbsp;deactivates once you become healthy or if you are put into the dying state before <i>Renewal</i> successfully triggers. You lose the <b>Broken</b> status effect.<br><br>Broken prevents Survivors from being healed.",
        "role": "survivor",
        "character": 18,
        "tunables": [
            [
                "28",
                "24",
                "20"
            ]
        ],
        "modifier": "BP_SecondWind",
        "teachable": 0,
        "image": "perks/iconPerks_secondWind.png"
    },
    "SelfSufficient": {
        "categories": [
            "adaptation"
        ],
        "name": "Unbreakable",
        "description": "Past battles have taught you a thing or two about survival.<br><br>Grants the ability to fully recover from the dying state <b>once per trial</b>. Increases dying recovery speed by {0}%.",
        "role": "survivor",
        "character": 7,
        "tunables": [
            [
                "25",
                "30",
                "35"
            ]
        ],
        "modifier": "SelfSufficient",
        "teachable": 40,
        "image": "perks/iconPerks_Unbreakable.png"
    },
    "Self_Care": {
        "categories": [
            "adaptation"
        ],
        "name": "Self-Care",
        "description": "Unlocks the ability to heal yourself without a healing item at&nbsp;{0}%&nbsp;the normal healing speed.",
        "role": "survivor",
        "character": 2,
        "tunables": [
            [
                "25",
                "30",
                "35"
            ]
        ],
        "modifier": "SelfCare",
        "teachable": 40,
        "image": "perks/iconPerks_SelfCare.png"
    },
    "Slippery_Meat": {
        "categories": [
            "adaptation"
        ],
        "name": "Slippery Meat",
        "description": "You have developed an efficient way to get off hooks.<br><br><li>Grants up to {0} extra escape attempts on the hook.</li><li>Hook escape attempts have a {1}% increased chance to succeed.</li>",
        "role": "survivor",
        "character": null,
        "tunables": [
            [
                "3"
            ],
            [
                "2",
                "3",
                "4"
            ]
        ],
        "modifier": "SlipperyMeat",
        "teachable": 0,
        "image": "perks/iconPerks_SlipperyMeat.png"
    },
    "Small_Game": {
        "categories": [
            "perception"
        ],
        "name": "Small Game",
        "description": "You have the undeniable capability to sense danger. Get an auditory warning when looking in the direction of Totems in a 45-degree cone within a range of {0} meters. Small Game has a cooldown of {1} seconds each time it activates. For each Dull Totem and Hex Totem cleansed by any player, gain a Token. Small Game's detection cone is reduced by 5 degrees per token.",
        "role": "survivor",
        "character": null,
        "tunables": [
            [
                "8",
                "10",
                "12"
            ],
            [
                "14",
                "12",
                "10"
            ]
        ],
        "modifier": "SmallGame",
        "teachable": 0,
        "image": "perks/iconPerks_SmallGame.png"
    },
    "SoleSurvivor": {
        "categories": [
            "concealment"
        ],
        "name": "Sole Survivor",
        "description": "As more of your friends fall to the Killer, you become shrouded in isolation and the Killer's <b>aura-reading abilities</b> towards you are disrupted.<br><br>Every time a fellow Survivor is killed or sacrificed, gain a token. For each token, your aura cannot be read by The Killer within a max range of {0} meters.<br><br>When you're the last Survivor alive:<li>Gain 75% action speed when repairing generators.</li><li>Gain 50% action speed while opening an exit gate or the Hatch.</li><br><br>Increases your chances of being The Killer's Obsession.<br><br>The Killer can only be <b>obsessed</b> with one Survivor at a time.",
        "role": "survivor",
        "character": 5,
        "tunables": [
            [
                "20",
                "22",
                "24"
            ]
        ],
        "modifier": "SoleSurvivor_BP",
        "teachable": 30,
        "image": "perks/iconPerks_SoleSurvivor.png"
    },
    "Solidarity": {
        "categories": [
            "adaptation"
        ],
        "name": "Solidarity",
        "description": "Sharing painful experiences has the power to heal.<br><br>While injured, healing a Survivor without using a Med-kit also heals you at a {0}% conversion rate.",
        "role": "survivor",
        "character": 15,
        "tunables": [
            [
                "40",
                "45",
                "50"
            ]
        ],
        "modifier": "Solidarity_BP",
        "teachable": 30,
        "image": "perks/iconPerks_Solidarity.png"
    },
    "SoulGuard": {
        "categories": [
            "adaptation"
        ],
        "name": "Soul Guard",
        "description": "You have been through immense hardship and you\u2019re stronger for it.<br><br>Gain the <b>Endurance</b> status effect for {0} seconds after being healed or having recovered from the dying state.<br><br>While cursed by a Hex, you can fully recover from the dying state.<br><br>This effect can only trigger once every 30 seconds.<br><br>Endurance prevents a Survivor from being downed, inflicting Deep Wound instead.<br><br>Deep Wound will put a Survivor in the dying state unless it is mended before the timer runs out.",
        "role": "survivor",
        "character": 21,
        "tunables": [
            [
                "4",
                "6",
                "8"
            ],
            [
                "20"
            ]
        ],
        "modifier": "SoulGuard",
        "teachable": 30,
        "image": "perks/iconPerks_SoulGuard.png"
    },
    "Spine_Chill": {
        "categories": [
            "navigation",
            "strategy"
        ],
        "name": "Spine Chill",
        "description": "An unnatural tingle warns you of impending doom.<br><br>Get notified when the Killer is within a 36-meter range. If the Killer is within range and is looking at you with a clear line of sight, your speed while repairing, sabotaging, healing, unhooking, cleansing, blessing, opening exit gates and unlocking is increased by {0}%.<li>The effects of <i>Spine Chill</i> linger for 0.5 seconds after the Killer looks away or is out of range.</li>",
        "role": "survivor",
        "character": null,
        "tunables": [
            [
                "2",
                "4",
                "6"
            ]
        ],
        "modifier": "SpineChill",
        "teachable": 0,
        "image": "perks/iconPerks_SpineChill.png"
    },
    "Sprint_Burst": {
        "categories": [
            "navigation"
        ],
        "name": "Sprint Burst",
        "description": "When starting to run, break into a sprint at {0}% of your normal running speed for a maximum of {1} seconds.<br><br>Causes the <i>Exhausted</i> status effect for {2} seconds.<br><br><i>Sprint Burst</i> cannot be used while <i>Exhausted</i>.<br><br>You do not recover from the <i>Exhausted</i> status effect while running.<br><br>Exhausted prevents Survivors from activating exhausting perks.",
        "role": "survivor",
        "character": 1,
        "tunables": [
            [
                "150"
            ],
            [
                "3"
            ],
            [
                "60",
                "50",
                "40"
            ]
        ],
        "modifier": "SprintBurst_BP",
        "teachable": 35,
        "image": "perks/iconPerks_SprintBurst.png"
    },
    "StakeOut": {
        "categories": [
            "strategy"
        ],
        "name": "Stake Out",
        "description": "Getting close to the Killer fills you with determination. For each {0} seconds you are standing within the Killer Terror Radius and not in a chase, you gain a token up to a maximum of {1} tokens.<br><br>When <i>Stake Out</i> has at least <b>1 token</b>, good Skill Checks are considered great Skill Checks, consume <b>1 token</b>, and grant an additional 1% bonus to generator repair progress.",
        "role": "survivor",
        "character": 12,
        "tunables": [
            [
                "15"
            ],
            [
                "2",
                "3",
                "4"
            ]
        ],
        "modifier": "StakeOut",
        "teachable": 40,
        "image": "perks/iconPerks_StakeOut.png"
    },
    "Streetwise": {
        "categories": [
            "support"
        ],
        "name": "Streetwise",
        "description": "Long nights out taught you to do a lot with what you've got. Reduce consumption rate of item charge by {0}% for you and allies within a {1} meter range. Once out of range, this effect persists for {2} seconds.",
        "role": "survivor",
        "character": 4,
        "tunables": [
            [
                "15",
                "20",
                "25"
            ],
            [
                "8"
            ],
            [
                "15"
            ]
        ],
        "modifier": "BP_Streetwise",
        "teachable": 40,
        "image": "perks/iconPerks_Streetwise.png"
    },
    "Technician": {
        "categories": [
            "concealment",
            "strategy"
        ],
        "name": "Technician",
        "description": "You are apt at handling machinery with the greatest care and precision.<br><br>The noises caused by your repairs and their hearing distance are reduced by {0} meters. On a failed repair Skill Check, there is a {1}% chance the generator explosion will be prevented.",
        "role": "survivor",
        "character": 8,
        "tunables": [
            [
                "8"
            ],
            [
                "5",
                "4",
                "3"
            ]
        ],
        "modifier": "Technician",
        "teachable": 30,
        "image": "perks/iconPerks_Technician.png"
    },
    "Tenacity": {
        "categories": [
            "adaptation",
            "navigation"
        ],
        "name": "Tenacity",
        "description": "There is nothing stopping you.<br><br>Your ferocious tenacity in dire situations allows you to crawl {0}% faster and recover at the same time. Grunts of pain while in the dying state are reduced by 75%.",
        "role": "survivor",
        "character": 12,
        "tunables": [
            [
                "30",
                "40",
                "50"
            ]
        ],
        "modifier": "Tenacity",
        "teachable": 30,
        "image": "perks/iconPerks_Tenacity.png"
    },
    "TheMettleOfMan": {
        "categories": [
            "adaptation"
        ],
        "name": "Mettle of Man",
        "description": "Evil has a way of always finding you.<br><br>After you earn {0} Protection Hit scoring events, <i>Mettle of Man</i> activates.<br><br>Once activated, the next occasion that would put you into the <b>dying state</b> from the <b>injured state</b> is ignored.<br><br>The next time you heal back to full health, your aura will be revealed to the Killer when you are further than {1} meters from the Killer.<br><br><i>Mettle of Man</i> will deactivate the next time you are put into the dying state.<br><br><li><i>Increases your chances to be the Killer\u2019s Obsession.</i></li><br><br>The Killer can only be <b>obsessed</b> with one Survivor at a time.",
        "role": "survivor",
        "character": 16,
        "tunables": [
            [
                "3"
            ],
            [
                "12",
                "14",
                "16"
            ]
        ],
        "modifier": "TheMettleOfMan_BP",
        "teachable": 40,
        "image": "perks/iconPerks_MettleOfMan.png"
    },
    "This_Is_Not_Happening": {
        "categories": [
            "safeguard",
            "strategy"
        ],
        "name": "This Is Not Happening",
        "description": "You perform at your best when you are under extreme stress. Great Skill Check success zones when repairing and healing get {0}% bigger when you are injured.",
        "role": "survivor",
        "character": null,
        "tunables": [
            [
                "10",
                "20",
                "30"
            ]
        ],
        "modifier": "ThisIsNotHappening",
        "teachable": 0,
        "image": "perks/iconPerks_ThisIsNotHappening.png"
    },
    "Up_The_Ante": {
        "categories": [
            "support"
        ],
        "name": "Up the Ante",
        "description": "All will be well in the end; you just know it. Your confidence strengthens the feeling of hope for those around you.<br><br>For each other Survivor still alive, grant a {0}% bonus of luck to all remaining Survivors.",
        "role": "survivor",
        "character": 6,
        "tunables": [
            [
                "1",
                "2",
                "3"
            ]
        ],
        "modifier": "UpTheAnte",
        "teachable": 35,
        "image": "perks/iconPerks_UpTheAnte.png"
    },
    "Urban_Evasion": {
        "categories": [
            "navigation"
        ],
        "name": "Urban Evasion",
        "description": "Years of evading the cops taught you a thing or two about stealth. Your movement speed while crouching is increased by {0}%.",
        "role": "survivor",
        "character": 4,
        "tunables": [
            [
                "90",
                "95",
                "100"
            ]
        ],
        "modifier": "UrbanEvasion",
        "teachable": 35,
        "image": "perks/iconPerks_UrbanEvasion.png"
    },
    "Vigil": {
        "categories": [
            "support"
        ],
        "name": "Vigil",
        "description": "You look over your friends even in dire situations. You and your allies within a {0} meter range recover from the <b>Blindness, Broken, Exhausted, Exposed, Hemorrhage, Hindered</b> and <b>Oblivious</b> status effects {1}% faster. Once out of range, this effect persists for {2} seconds.",
        "role": "survivor",
        "character": 11,
        "tunables": [
            [
                "8"
            ],
            [
                "20",
                "25",
                "30"
            ],
            [
                "15"
            ]
        ],
        "modifier": "Vigil",
        "teachable": 40,
        "image": "perks/iconPerks_vigil.png"
    },
    "Visionary": {
        "categories": [
            "perception"
        ],
        "name": "Visionary",
        "description": "You\u2019re remarkably focused on your means of escape.<br><br>You see generator\u2019s auras within {0} meters.<br><br>Anytime a generator is completed, <i>Visionary</i> is disabled for {1} seconds.",
        "role": "survivor",
        "character": 22,
        "tunables": [
            [
                "32"
            ],
            [
                "20",
                "18",
                "16"
            ]
        ],
        "modifier": "BP_Visionary",
        "teachable": 30,
        "image": "perks/iconPerks_Visionary.png"
    },
    "WakeUp": {
        "categories": [
            "perception",
            "strategy"
        ],
        "name": "Wake Up!",
        "description": "Unlocks potential in one's aura reading ability. Once all generators are powered, exit gates are revealed to you within a {0} meter range. While opening the exit gates, reveal your aura to other Survivors up to {1} meters.<br><br>While <i>Wake Up!</i> is active, you open the exit gates {2}% faster.",
        "role": "survivor",
        "character": 11,
        "tunables": [
            [
                "128"
            ],
            [
                "128"
            ],
            [
                "15",
                "20",
                "25"
            ]
        ],
        "modifier": "WakeUp",
        "teachable": 30,
        "image": "perks/iconPerks_wakeUp.png"
    },
    "WellMakeIt": {
        "categories": [
            "safeguard"
        ],
        "name": "We'll make it",
        "description": "Helping others heightens your morale.<br><br>When you rescue a Survivor from a hook, gain a {0}% speed increase while healing others for {1} seconds.",
        "role": "survivor",
        "character": null,
        "tunables": [
            [
                "100"
            ],
            [
                "30",
                "60",
                "90"
            ]
        ],
        "modifier": "WellMakeIt",
        "teachable": 0,
        "image": "perks/iconPerks_WellMakeIt.png"
    },
    "WereGonnaLiveForever": {
        "categories": [
            "support"
        ],
        "name": "We're Gonna Live Forever",
        "description": "Your few friends deserve the best protection.<br><br>When healing another Survivor in the dying state, your healing speed is increased by 100%.<br><br>Additionally, performing any of the following actions activates this perk's secondary function:<li>Perform a Safe Hook Rescue</li><li>Take a hit to protect a Survivor</li><li>Rescue a Survivor by stunning the Killer with a pallet</li><li>Rescue a Survivor by blinding the Killer</li>When this perk's secondary function is active, healing another Survivor out of the dying state grants them <b>Endurance</b> for {0} seconds and deactivates the secondary function.<br><br>Endurance prevents a Survivor from being downed, inflicting Deep Wound instead.<br><br>Deep Wound will put a Survivor in the dying state unless it is mended before the timer runs out.",
        "role": "survivor",
        "character": 9,
        "tunables": [
            [
                "6",
                "8",
                "10"
            ]
        ],
        "modifier": "WereGonnaLiveForever",
        "teachable": 30,
        "image": "perks/iconPerks_WereGonnaLiveForever.png"
    },
    "WindowsOfOpportunity": {
        "categories": [
            "perception"
        ],
        "name": "Windows of Opportunity",
        "description": "Unlocks potential in one's aura reading ability. Auras of pallets, breakable walls, and vault locations are revealed to you when within a {0} meter range.",
        "role": "survivor",
        "character": 10,
        "tunables": [
            [
                "24",
                "28",
                "32"
            ],
            [
                "30",
                "25",
                "20"
            ]
        ],
        "modifier": "WindowsOfOpportunity",
        "teachable": 35,
        "image": "perks/iconPerks_WindowsOfOpportunity.png"
    }
}
export default Perks;